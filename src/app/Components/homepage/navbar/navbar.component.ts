import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_Services/user-auth.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private userAuthService: UserAuthService,
              private router : Router,
              public userService:UserService){}
 ngOnInit(): void {}
 public isLoggedIn(){
  return this.userAuthService.isLoggedIn();
 }

 public logout(){
   this.userAuthService.clear();
   this.router.navigate(['/home']);

 }
 aboutus = () => {
  this.router.navigateByUrl('/aboutus');
};
contactus = () => {
  this.router.navigateByUrl('/contactus');
};
gotoHome() {
  this.router.navigateByUrl('/home');
}
}
