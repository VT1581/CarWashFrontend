import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from 'src/app/_Services/user-auth.service';
import { UserService } from 'src/app/_Services/user.service';

@Component({
  selector: 'app-carwasher',
  templateUrl: './carwasher.component.html',
  styleUrls: ['./carwasher.component.css']
})
export class CarwasherComponent implements OnInit{

  message!: string;
  opened=false;
  userName:string="";
  username: string | undefined;
  constructor(private userAuthService: UserAuthService,
              private router : Router,
              private route: ActivatedRoute,
              private userService:UserService){
                this.route.params.subscribe(params => {
                  this.userName = params['name'];
                });
              }
  navLinks = [
    { route: 'dashboard', label: 'Home', iconClass: 'bi bi-house-door', iconPath: 'M16 8l-8-8-8 8h5v8h6V8h5z' },
    //{ route: '/profile', label: 'Profile', iconClass: 'bi bi-person-circle', iconPath: 'M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' },
    { route: 'orders', label: 'Orders', iconClass: 'bi bi-cart-check-fill', iconPath: 'M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z' },
    //{ route: 'contact', label: 'Contact', iconClass: 'bi bi-person-lines-fill', iconPath: 'M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2' },
    //{ route: 'ratings', label: 'Ratings', iconClass: 'bi bi-star', iconPath: 'M12.713 13.293a1 1 0 0 1-1.32.083l-2.752-1.405a1 1 0 0 0-.936 0L4.607 13.376a1 1 0 0 1-1.32-.083 1 1 0 0 1-.083-1.32l1.406-2.751a1 1 0 0 0 0-.937L3.293 6.713a1 1 0 0 1 .083-1.32 1 1 0 0 1 1.32-.083l2.752 1.406a1 1 0 0 0 .937 0l2.751-1.406a1 1 0 0 1 1.32.083 1 1 0 0 1 .083 1.32l-1.406 2.752a1 1 0 0 0 0 .936l1.406 2.752a1 1 0 0 1-.083 1.32z' },
    //{ route: 'logout', label: 'Logout', iconClass: 'bi bi-box-arrow-right', iconPath: 'M9.354 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0l-1.5-1.5a.5.5 0 1 0 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 0 .708.708l-3 3z' },
  ];
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
