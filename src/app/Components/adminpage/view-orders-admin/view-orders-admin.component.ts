import { Component } from '@angular/core';
import { OrderService } from 'src/app/_Services/order.service';
import { UserService } from 'src/app/_Services/user.service';
@Component({
  selector: 'app-view-orders-admin',
  templateUrl: './view-orders-admin.component.html',
  styleUrls: ['./view-orders-admin.component.css']
})
export class ViewOrdersAdminComponent {
  order = [{
    orderId: '',
    washpackName: '',
    carModel: '',
    amount: '',
    userName: '',
    date: '',
    paymentStatus: '',
    emailAddress: '',
    address:''
  }]

  constructor(private _order: OrderService, private login: UserService) { }
  token: any;
  ngOnInit(): void {
    this._order.getAllOrders().subscribe(
      (data: any) => {
        this.order = data;
        console.log(this.order);
      }
    )
  }
}
