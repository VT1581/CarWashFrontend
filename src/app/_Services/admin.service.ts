import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  deletePromo(promoId: string) {
    return this.http.delete(`http://localhost:8082/promocodeapi/deletemapping/${promoId}`);
  }
  getAllPromos() {
    return this.http.get(`http://localhost:8082/promocodeapi/allpromocodes`);
  }

  addPromos(promocode: any) {
    return this.http.post("http://localhost:8082/promocodeapi/promocode", promocode);
  }
}
