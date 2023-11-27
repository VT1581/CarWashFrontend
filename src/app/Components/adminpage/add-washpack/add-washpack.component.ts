import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { WashpackServiceService } from 'src/app/_Services/washpack-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-washpack',
  templateUrl: './add-washpack.component.html',
  styleUrls: ['./add-washpack.component.css']
})
export class AddWashpackComponent {
  constructor(private _washpack: WashpackServiceService, private snack: MatSnackBar,
    private router:Router) { }

  public washpacks = {
    washpackName: '',
    washpackPrice: '',
    description: ''
  }
  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.washpacks);
    if (this.washpacks.washpackName == "" || this.washpacks.washpackName == null) {
      this.snack.open("Packname is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.washpacks.washpackPrice== "" || this.washpacks.washpackPrice == null || this.washpacks.washpackPrice<="0") {
      this.snack.open("Amount is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.washpacks.description == "" || this.washpacks.description == null) {
      this.snack.open("Description is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    this._washpack.addWashpacks(this.washpacks).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success', `Washpack Added!`, 'success');
        this.router.navigate(['/admin/washpack/']);


      },
      (error) => {
        console.log(error);
        // alert("something went wrong")
        this.snack.open("something went wrong!!", "ok", {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })

      }
    )
  }

}
