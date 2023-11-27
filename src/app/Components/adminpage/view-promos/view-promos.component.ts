// import { Swal } from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { Promos } from './../../../promos';
import { AdminService } from './../../../_Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-promos',
  templateUrl: './view-promos.component.html',
  styleUrls: ['./view-promos.component.css']
})
export class ViewPromosComponent implements OnInit{
   promos = [
    {
      code:'',
      discount: '',
      expDate: '',
    }
   ]

    
   constructor(private _promocode: AdminService, public dialog: MatDialog, private snack: MatSnackBar,public router:Router) {}




  ngOnInit(): void {
      this._promocode.getAllPromos().subscribe(
        (data: any) => {
          this.promos = data;
          console.log(this.promos);
        },
        (error) => {
          console.log("error");
          alert('Error Loading in data!!');
        }
      )

  }
    matSnack(message: string, action: string) {
      this.snack.open(message, action)
    }

    getPromo(){
      this._promocode.getAllPromos().subscribe(
        (data: any) => {
          this.promos = data;
          console.log(this.promos);
        },
        (error) => {
          console.log("error");
          alert('Error Loading in data!!');
        }
      )

    }

    formSubmit(code:string){
    const promoId = '123'; // Replace with the actual promo ID to be deleted
    this._promocode.deletePromo(code).subscribe(
      () => {
        console.log('Promo deleted successfully.');
        this.getPromo();
      },
      (error) => {
        console.error('Error deleting promo:', error);
      }
    );
}







    }



  




