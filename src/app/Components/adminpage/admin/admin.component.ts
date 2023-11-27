import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_Services/user-auth.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  username: string | undefined;
  
  ngOnInit(): void {this.userService.userNameSubject.subscribe((userName) => {
    this.username = userName;
    console.log(this.username);
  });
    
  }
  opened = false; 
  constructor(private userAuthService: UserAuthService,
    private router : Router,
    private userService:UserService){}
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
   }
  
   public logout(){
     this.userAuthService.clear();
     this.router.navigate(['/home']);
  
   }

  
}
