import { Component, HostListener } from '@angular/core';
import { OrderService } from 'src/app/_Services/order.service';
import { UserService } from 'src/app/_Services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_Services/user-auth.service';



@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  paymentHandler:any=null;
  username = '';

  order = [{
    orderId: '',
    washpackName: '',
    carModel: '',
    amount:0,
    userName: '',
    date: '',
    paymentStatus: '',
    emailAddress: '',
    address:''
  }]
  public pay={
    name:'',
    email:'',
    paystatus:'pending',
    amount:0
  }

  constructor(private _order: OrderService, private login: UserService,private userAuthService: UserAuthService,
    private router : Router) { }
  token: any;
  ngOnInit(): void {
    this.login.userNameSubject.subscribe((userName) => {
      this.username = userName;
      console.log(this.username);
    });
    this._order.getAllOrdersByCustomerName(this.username).subscribe(
      (data: any) => {
        this.order = data;
        console.log(this.order);
      }
    )
    this.invokeStripe()
  }
    showUpdateForm:boolean=false;
    //update the order
    update(or:any){}


   // delete Washpacks function
   deleteOrders(orderId: any) {
    console.log(orderId)
    Swal.fire({
      icon: 'warning',
      title: 'Want to delete?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result:any) => {

      if (result.isConfirmed) {

        this._order.deleteOrder(orderId).subscribe(
          (data) => {
            this.order = this.order.filter((_order) => _order.orderId != orderId);
            Swal.fire("Success", "Order Deleted ", 'success');
          }, (error) => {
            console.log(error);

            Swal.fire("Error", "Error in deleting order", 'error');

          }

        );
      }

    })
  }

  payment(o:any){
    this.pay.name=o.userName;
    this.pay.email=o.emailAddress;
    this.makePayment(o.amount);
  }

  makePayment(amount:number){
    const self = this;
    this.pay.amount=amount;
    this._order.addPayment(this.pay).subscribe((data:any)=>{
      console.log(data);
    });
  const paymentHandler=(<any>window).StripeCheckout.configure({
    key:'pk_test_51O5TImSIDLZuEiJ3JQOlfYY1BycefyR5mac85PhCbCe0GAujrcbOtnRAS2YvM8kIN156fLJDKdMMTeJUirz8WGCm00TNKmwV7S',
    locale:'auto',
    token:function(stripeToken:any){
      if (stripeToken.status === 'succeeded') {
        self.pay.paystatus = 'success';
      } else {
        self.pay.paystatus = 'pending';
      }
      console.log(stripeToken)
      self.pay.paystatus='success';
      self._order.addPayment(self.pay).subscribe((data:any)=>{
      console.log(data);
      });
      self._order.updatePaymentStatus(self.pay.name,self.pay.paystatus).subscribe((data:any)=>{
        console.log(data);
        self.ngOnInit()
        
      });
      
    }

  });
  paymentHandler.open({
    name:"PAYMENT",
    description:"Green CarWash",
    amount: amount * 100,
  })

  }
  invokeStripe(){
    
    if(!window.document.getElementById('stripe-script')){
      const script =window.document.createElement('script');
      script.id='stripe-script';
      script.type='text/javascript';
      script.src='https://checkout.stripe.com/checkout.js';
      script.onload=()=>{
        this.paymentHandler=(<any>window).StripeCheckout.configure({
          key:'pk_test_51O5TImSIDLZuEiJ3JQOlfYY1BycefyR5mac85PhCbCe0GAujrcbOtnRAS2YvM8kIN156fLJDKdMMTeJUirz8WGCm00TNKmwV7S',
          locale:'auto',
          token:function(stripeToken:any){
            console.log(stripeToken);
          },
        });
      };
      
      window.document.body.appendChild(script);
      }
    }

}
