import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userNameSubject = new BehaviorSubject<string>('');
  

  setUserName(userName: string) {
    this.userNameSubject.next(userName);
  }

  getUserName() {
    return this.userNameSubject.asObservable();
  }


  getAllCustomers() {
    return this.httpClient.get("http://localhost:8909/auth/customers");
  }
  getAllCarwashers() {
    return this.httpClient.get("http://localhost:8909/auth/carwashers");
  }
  getUser(): any {
    let userStr = localStorage.getItem("user");
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      // this.logout();
      return null;
    }
  }

  path_of_api ="http://localhost:8909/"
  name: string = '';
  
  constructor(private httpClient :HttpClient,
    private userAuthService:UserAuthService) {

   }
   requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );


   public login(loginData: any) {
    // Create an HttpHeaders object with the Bearer token
   

    // Include the headers in the HTTP request
    return this.httpClient.post(this.path_of_api + "auth/signin",
     loginData, { headers:this.requestHeader,
    });
  }
  public register(registerData: any){
     return this.httpClient.post(this.path_of_api + 'auth/signup'
     ,registerData);
  }

  public roleMatch(allowedRoles: any): boolean {
    const userRoles: any = this.userAuthService.getRoles();
  
    if (userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          console.log('User Role:', userRoles[i]);
          console.log('Allowed Role:', allowedRoles[j]);
          if (userRoles[i].roleName===allowedRoles[j]) {
            console.log('Match found!');
            return true;
          }
        }
      }
    }
    return false;
  }
  


}
