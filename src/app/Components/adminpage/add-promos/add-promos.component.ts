import { AdminService } from './../../../_Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-promos',
  templateUrl: './add-promos.component.html',
  styleUrls: ['./add-promos.component.css']
})
export class AddPromosComponent {
  constructor(private _promocode:AdminService, private snack: MatSnackBar,
    private router:Router) { }

    public promocodes={
      code:'',
      discount: '',
      expDate: ''
    }
    
  ngOnInit(): void {
  }
    formSubmit() {
      console.log(this.promocodes);
      if (this.promocodes.code == "" || this.promocodes.code == null) {
        this.snack.open("Promocode is required!!", 'ok', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
        return;
      }
      if (this.promocodes.discount== "" || this.promocodes.discount == null || this.promocodes.discount<="0") {
        this.snack.open("Discount is required!!", 'ok', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
        return;
      }
      if (this.promocodes.expDate == "" || this.promocodes.expDate == null) {
        this.snack.open(" ExpiryDate is required!!", 'ok', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
        return;
      }
      this._promocode.addPromos(this.promocodes).subscribe(
        (data: any) => {
          console.log(data);
          alert(`Promocode Added successfully!!`);
          this.router.navigate(['/admin/add/promos/']);
  
  
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
