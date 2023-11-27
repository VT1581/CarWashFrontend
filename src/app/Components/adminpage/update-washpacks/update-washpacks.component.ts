import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Router } from '@angular/router';
import { WashPacks } from 'src/app/class/WashPacks';
import { WashpackServiceService } from './../../../_Services/washpack-service.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-update-washpacks',
  templateUrl: './update-washpacks.component.html',
  styleUrls: ['./update-washpacks.component.css']
})
export class UpdateWashpacksComponent implements OnInit{
  washpack: WashPacks = new WashPacks();
  washpackId: any;
  constructor(
    private _washpack: WashpackServiceService, // Replace with your actual service
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    private router:Router
  ) { }
  // public washpacks = {
  //   washpackName: '',
  //   washpackPrice: '',
  //   description: ''
  // }
 
  ngOnInit(): void {
    // Get the packId from route parameters
    this.route.params.subscribe(params => {
      console.log(params)
      this.washpackId = params['packId'];
      console.log(params['id']) //log the value of id
    });
 
    // Fetch the existing washpack data by packId
    this._washpack.getWashpack(this.washpackId).subscribe(
      (data: any) => {
        console.log(data, 'data:');
        this.washpack = data; // Update the form with existing data
      },
      (error: any) => {
        console.error('Error fetching washpack:', error);
      }
    );
  }
 
  updateData(): void {
    console.log(this.washpack);
    if (this.washpack.washpackName == "" || this.washpack.washpackName == null) {
      this.snack.open("Packname is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.washpack.washpackPrice == null || this.washpack.washpackPrice<=0) {
      this.snack.open("Amount is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.washpack.description == "" || this.washpack.description == null) {
      this.snack.open("Description is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    Swal.fire('Success', `WashPack Updated`, 'success');
    //from washpack it goes to backend and it gets update
    this._washpack.updateWashpack(this.washpack).subscribe(
      (data: any) => {
        this.router.navigate(['admin/washpack']);
        if (data.msg === true) {
 
          console.log('Washpack Updated');
         
        }
      }
    );
  }
 
 
 
}
 