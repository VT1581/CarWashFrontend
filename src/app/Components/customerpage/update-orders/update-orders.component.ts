import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/_Services/order.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-update-orders',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit{
 
  order: Order = new Order(); // Initialize washpack object
  orderId: any; // Initialize packId
  // constructor(private _route: ActivatedRoute, private _washpack: WashpackService) { }
  constructor(
    private _order: OrderService, // Replace with your actual service
    private route: ActivatedRoute,
    private snack: MatSnackBar,
    private router: Router
  ) { }
 
 
  ngOnInit(): void {
    // Get the packId from route parameters
    this.route.params.subscribe(params => {
      console.log(params)
      this.orderId = params['orderId'];
      console.log(params['id']) //log the value of id
      this._order.getOrder(this.orderId).subscribe(
        (data: any) => {
          console.log(data, 'data:');
          this.order = data; // Update the form with existing data
        });
    });
 
    // Fetch the existing washpack data by packId
  }
 
  updateData(): void {
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
 
 
 
    Swal.fire('Success', `Order Updated`, 'success');
    console.log(this.order);
    this._order.updateOrders(this.order).subscribe(
      (data: any) => {
        this.router.navigate(['customer/my-orders']);
        if (data.msg === true) {
         
 
 
 
         
          console.log('Washpack Updated');
         
        }
      },
      (error) => {
        alert("something went wrong")
        console.error('Error in updating the washpack:', error);
      }
    );
  }
 
}