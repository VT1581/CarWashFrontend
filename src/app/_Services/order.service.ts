import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  constructor(
    private _http: HttpClient
  ) { }
  
  getAllOrders() {
    return this._http.get(`http://localhost:8087/orders/allorders`);
  }

  updatePaymentStatus(name: string, status: string) {
    const encodedName = encodeURIComponent(name);
    const encodedStatus = encodeURIComponent(status);
  
    return this._http.put<Order>(`http://localhost:8087/orders/update/${encodedName}/${encodedStatus}`,{});
  }
  

  addPayment(pay:any){
    return this._http.post(`http://localhost:8092/addpayment`,pay);
  }


  // method to place order
  public addOrder(order: any) {
    return this._http.post(`http://localhost:8087/orders/addOrder`, order);
  }

  // get all customers
  public getAllOrdersByCustomerName(name:string) {
    return this._http.get(`http://localhost:8087/orders/orderbyname/${name}`,);

  }

   // delete order
   public deleteOrder(orderId: any) {
    return this._http.delete(`http://localhost:8087/orders/deleteOrder/${orderId}`);
  }

   //get a single 
   public getOrder(orderId: any) {
    return this._http.get(`http://localhost:8087/orders/order/${orderId}`);
  }
  
   
  
    // Update
    public updateOrders(order: any) {
      console.log(order);
      return this._http.put<Order>("http://localhost:8087/orders/updateOrder", order);
    }
}
