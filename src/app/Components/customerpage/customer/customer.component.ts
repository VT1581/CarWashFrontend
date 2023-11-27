import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_Services/user-auth.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  username = sessionStorage.getItem('username');
  // username: string | undefined;
  constructor(private userAuthService: UserAuthService,
    private router : Router,
    public userService:UserService){}

  message!: string;
  opened=false;
  // constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.userNameSubject.subscribe((userName) => {
      this.username = userName;
      console.log(this.username);
    });
  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
   }
  
   public logout(){
     this.userAuthService.clear();
     this.router.navigate(['/home']);
  
   }

}
