import { Component } from '@angular/core';
import { UserService } from 'src/app/_Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-carwashers',
  templateUrl: './view-carwashers.component.html',
  styleUrls: ['./view-carwashers.component.css']
})
export class ViewCarwashersComponent {
  constructor(private customers:UserService){}

  public user=[{
         username:'',
         email:'',
  
  }]
 
 
   
   
   ngOnInit(): void {
     this.customers.getAllCarwashers().subscribe(
       (data: any) => {
         this.user = data;
         console.log(this.user);
       },
       (error) => {
         console.log("error");
         Swal.fire('Error!', "Error in loading data!", "error");
       }
     )
   }

}
