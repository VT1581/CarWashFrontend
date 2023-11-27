
import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserAuthService } from 'src/app/_Services/user-auth.service';
import { UserService } from 'src/app/_Services/user.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  errorMessage: string = '';
  showPassword: boolean=false;
  constructor(private userService: UserService,
    private userAuthService:UserAuthService,
    private router : Router){
 
  }
  ngOnInit():void{
 
  }
  name:string="";
  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        console.log(response.accessToken);
        console.log(response.roles);
        console.log(response.username);
        this.userService.setUserName(response.username);
        console.log(response.password);
        console.log(response.email);
 
 
        this.userAuthService.setRoles(response.roles),
        this.userAuthService.setToken(response.accessToken);
 
       const role =  response.roles[0];
        if(role==='ROLE_CARWASHER'){
          this.router.navigate(['/carwasher',]);
        }
        else if(role=='ROLE_CUSTOMER'){
          this.router.navigate(['/customer']);
        }
        else{
          this.router.navigate(['/admin']);
        }
      },
      (error)=>{
        console.log(error);
        this.errorMessage="Invalid credentials, Please check your username and password.";
      }
    );
  }
 
 public registerUser(){
     this.router.navigate(['/register']);
 }
 togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}
 
}