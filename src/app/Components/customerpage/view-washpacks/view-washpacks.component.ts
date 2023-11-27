import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WashpackServiceService } from 'src/app/_Services/washpack-service.service';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-washpacks',
  templateUrl: './view-washpacks.component.html',
  styleUrls: ['./view-washpacks.component.css']
})
export class ViewWashpacksComponent {

  status:boolean=false;

  washpacks = [
    {
      washpackId:'',
      washpackName:'',
      washpackPrice:'',
      description:'',
     
    }
  ]

  washpack={
    washpackId:'',
    washpackName:'',
    washpackPrice:'',
    description:'',
    promocodeCode:'',
  }
  promoCodes: { [washpackId: string]: string } = {};
  promoCodeApplied: { [washpackId: string]: boolean } = {};

  promocode:string="";
  constructor(private _washpack: WashpackServiceService, public dialog: MatDialog, private snack: MatSnackBar,public router:Router) { }

  ngOnInit(): void {
    this._washpack.getAllWashers().subscribe(
      (data: any) => {
        this.washpacks = data;
        console.log(this.washpacks);

      },
      // (error) => {
      //   console.log("error");
      //   Swal.fire('Error!', "Error in loading data!", "error");

      // }
    )
  }

  matSnack(message: string, action: string) {
    this.snack.open(message, action)
  }
  selectWashPack(washPack: any) {
    this._washpack.setWashPack(washPack);
    // Redirect to the place order page
    this.router.navigate(['customer/place-order']);
  }

  update(o:any){
    
    
  }

  promoapply(o:any){
      this.washpack=o;
      // this.washpack.promocodeCode=this.promocode;
      this.washpack.promocodeCode=this.promoCodes[o.washpackId];
      console.log(this.washpack)
      this._washpack.applycoupon(this.washpack).subscribe(
        (data: any) => {
          this.washpack=data;
          console.log(data);
          o.washpackPrice=this.washpack.washpackPrice;
          this._washpack.updatewashpack(o).subscribe((d:any)=>{
            console.log(d);
            this.status=true;
            this.promoCodeApplied[o.washpackId] = true;
            this.ngOnInit()
          })
        },
      )
  }
  

}
