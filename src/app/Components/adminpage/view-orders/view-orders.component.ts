import { Component } from '@angular/core';
import { OrderService } from 'src/app/_Services/order.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent {
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
