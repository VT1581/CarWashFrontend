import { Component } from '@angular/core';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent {
  constructor(private customers:UserService){}

 user=[{
        username:'',
       
        email:'',
       
 }]


  
  
  ngOnInit(): void {
    this.customers.getAllCustomers().subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      }
      // (error) => {
      //   console.log("error");
      //   Swal.fire('Error!', "Error in loading data!", "error");
      // }
    )
  }

}
