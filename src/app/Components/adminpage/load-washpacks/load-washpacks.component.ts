import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WashpackServiceService } from 'src/app/_Services/washpack-service.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-load-washpacks',
  templateUrl: './load-washpacks.component.html',
  styleUrls: ['./load-washpacks.component.css']
})
export class LoadWashpacksComponent implements OnInit{
  washpacks = [
    {
      washpackId:'',
      washpackName:'',
      washpackPrice:'',
      description:'',
     
    }
  ]


  constructor(private _washpack: WashpackServiceService, public dialog: MatDialog, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this._washpack.getAllWashers().subscribe(
      (data: any) => {
        this.washpacks = data;
        console.log(this.washpacks);

      },
      (error) => {
        console.log("error");
        Swal.fire('Error!', "Error in loading data!", "error");

      }
    )
  }

  matSnack(message: string, action: string) {
    this.snack.open(message, action)
  }

  deleteWashpack(washpackId: any) {
    console.log(washpackId)
    Swal.fire({
      icon: 'warning',
      title: 'Want to delete?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {

      if (result.isConfirmed) {

        this._washpack.deleteWashpacks(washpackId).subscribe(
          (data) => {
            this.washpacks = this.washpacks.filter((_washpack) => _washpack.washpackId != washpackId);
            Swal.fire("Success", "Washpack Deleted ", 'success');
          }, (error) => {
            console.log(error);

            Swal.fire("Error", "Error in deleting washpack", 'error');

          }

        );
      }

    })
  }

 

}
