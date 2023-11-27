import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WashPacks } from '../class/WashPacks';

@Injectable({
  providedIn: 'root'
})
export class WashpackServiceService {

  constructor(private http: HttpClient) { }

  public updateWashpack(washpack: any) {
    console.log(washpack);
    return this.http.put<WashPacks>("http://localhost:8081/washpacks/updateWashPacks", washpack);
  }
  deleteWashpacks(washpackId: any) {
    return this.http.delete(`http://localhost:8081/washpacks/deleteWashPacks/${washpackId}`);
  }

  private selectedWashPack: any;

  setWashPack(washPack: any) {
    this.selectedWashPack = washPack;
  }

  getWashPack() {
    return this.selectedWashPack;
  }

  getWashpack(washpackId: any) {
    return this.http.get(`http://localhost:8081/washpacks/${washpackId}`);
  }

  public getAllWashers():Observable<any> {
    return this.http.get(`http://localhost:8081/washpacks/getAllWashPacks`);
  }
  // add
  public addWashpacks(washpack: any) {
    return this.http.post("http://localhost:8081/washpacks/addWashPacks", washpack);
  }
   
  public applycoupon(washPack:any){
    return this.http.post(`http://localhost:9090/washpack`,washPack);
  }

  public updatewashpack(washPack:any){
    return this.http.put(`http://localhost:8081/washpacks/updateWashPacks`,washPack);
  }

}
