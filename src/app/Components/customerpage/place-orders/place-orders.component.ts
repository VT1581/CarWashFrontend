import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ActivatedRoute } from '@angular/router';
import { WashpackServiceService } from 'src/app/_Services/washpack-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/_Services/user.service';
import { OrderService } from 'src/app/_Services/order.service';

@Component({
  selector: 'app-place-orders',
  templateUrl: './place-orders.component.html',
  styleUrls: ['./place-orders.component.css']
})
export class PlaceOrdersComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _order: OrderService,
    private _washpack: WashpackServiceService, private login: UserService, private snack: MatSnackBar) { }
  user: any=null;
  packId = 0;   
  washpack: any;
    
  public order ={
    washpackName: '',
    carModel: '',
    amount: '',
    userName: '',
    emailAddress: '',
    address:''
  }

  ngOnInit(): void {
    this.login.userNameSubject.subscribe((userName) => {
      this.order.userName = userName;
    });
    const washPack = this._washpack.getWashPack();
  if (washPack) {
    this.order.washpackName = washPack.washpackName;
    this.order.amount = washPack.washpackPrice;
  }

    this.user = this.login.getUser();
    this.packId = this._route.snapshot.params['packId'];

   
    this._washpack.getWashpack(this.packId).subscribe(
      (data: any) => {
        this.washpack = data;
        console.log(this.washpack);
        this.order.washpackName =this.washpack.name;
        this.order.amount = this.washpack.amount;
        this.order.userName = this.user.username;       
      },
      (error) => {
        console.log(error);

      }
    )

  }

  onSubmit() {
    if (this.order.washpackName == "" || this.order.washpackName == null) {
      this.snack.open("Wash Name is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.order.amount == "" || this.order.amount == null) {
      this.snack.open("Amount is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.order.carModel == "" || this.order.carModel == null) {
      this.snack.open("carModel is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.order.userName == "" || this.order.userName == null) {
      this.snack.open("customerName is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.order.emailAddress == "" || this.order.emailAddress == null) {
      this.snack.open("emailId is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    if (this.order.address == "" || this.order.address == null) {
      this.snack.open("address is required!!", 'ok', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
      return;
    }
    this._order.addOrder(this.order).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Success', `Order Placed!`, 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open("something went wrong!!", "ok", {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })

      }
    )

  }

}
