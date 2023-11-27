import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/_Services/user-auth.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registrationSuccess: boolean = false;
  constructor(private userService:UserService,
    private userAuthService:UserAuthService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  register(registerForm:NgForm){
      console.log(registerForm.value);
      this.userService.register(registerForm.value)
      .subscribe((response)=>{
      this.registrationSuccess=true;


         console.log(response);
      },
      (error)=>{
        console.log(error);
      }
      );
  }

}
