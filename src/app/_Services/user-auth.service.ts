import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: any[]) {
    const rolesWithRoleName = roles.map(role => ({ roleName: role }));
    localStorage.setItem("roles", JSON.stringify(rolesWithRoleName));
    console.log("Roles set in localStorage:", rolesWithRoleName);
  }
  
    public getRoles(): [] | null {
      const rolesJson = localStorage.getItem("roles");
      return rolesJson ? JSON.parse(rolesJson) : null;
    }

    public setToken(jwtToken: string) {
      localStorage.setItem("jwtToken", jwtToken);
      console.log("Token set in localStorage:", jwtToken);
    }
    
    public getToken(): any {
      const jwtToken = localStorage.getItem("jwtToken");
    //  console.log("Token retrieved from localStorage:", jwtToken);
      return jwtToken;
    }
    
    public clear(){
      localStorage.clear();
    }

    public isLoggedIn(){
      return this.getRoles() && this.getToken();
    }
    
}
