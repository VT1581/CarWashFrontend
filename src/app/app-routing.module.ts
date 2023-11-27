import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Components/adminpage/admin/admin.component';
import { CarwasherComponent } from './Components/carwasherpage/carwasher/carwasher.component';
import { CustomerComponent } from './Components/customerpage/customer/customer.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { HomeComponent } from './Components/homepage/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './_Auth/auth.guard';
import {AboutusComponent} from './Components/homepage/aboutus/aboutus.component';
import {ContactusComponent} from './Components/homepage/contactus/contactus.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ViewWashpacksComponent } from './Components/customerpage/view-washpacks/view-washpacks.component';
import { MyOrdersComponent } from './Components/customerpage/my-orders/my-orders.component';
import { WelcomeCustomerComponent } from './Components/customerpage/welcome-customer/welcome-customer.component';
import { PlaceOrdersComponent } from './Components/customerpage/place-orders/place-orders.component';
import { WelcomeWasherComponent} from './Components/carwasherpage/welcome-washer/welcome-washer.component';
import { ViewOrdersComponent } from './Components/adminpage/view-orders/view-orders.component';
import { WelcomeAdminComponent } from './Components/adminpage/welcome-admin/welcome-admin.component';
import { UpdateWashpacksComponent } from './Components/adminpage/update-washpacks/update-washpacks.component';
import { AddPromosComponent } from './Components/adminpage/add-promos/add-promos.component';
import { ViewOrdersAdminComponent } from './Components/adminpage/view-orders-admin/view-orders-admin.component';
import { ViewCustomersComponent } from './Components/adminpage/view-customers/view-customers.component';
import { LoadWashpacksComponent } from './Components/adminpage/load-washpacks/load-washpacks.component';
import { ViewCarwashersComponent } from './Components/adminpage/view-carwashers/view-carwashers.component';
import { ViewPromosComponent } from './Components/adminpage/view-promos/view-promos.component';
import { UpdateOrdersComponent } from './Components/customerpage/update-orders/update-orders.component';
import { AddWashpackComponent } from './Components/adminpage/add-washpack/add-washpack.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent },

  { path: 'carwasher', component: CarwasherComponent, canActivate:[AuthGuard],data:{roles:['ROLE_CARWASHER']},
  children:[
    {path: '',component: WelcomeWasherComponent},
    {path: 'dashboard',component: WelcomeWasherComponent},
    {path: 'orders',component: ViewOrdersComponent},
  ]},
  { path: 'customer', component: CustomerComponent,canActivate:[AuthGuard],data:{roles:['ROLE_CUSTOMER']} ,
  children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeCustomerComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'washpack', component: ViewWashpacksComponent },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'place-order',component: PlaceOrdersComponent},
      { path: 'my-orders/update-order/:orderId', component: UpdateOrdersComponent },
  ]},
  { path: 'admin', component: AdminComponent ,canActivate:[AuthGuard],data:{roles:['ROLE_ADMIN']},
  children:[
    { path: '',component: WelcomeAdminComponent},
    {path: 'profile',component: ProfileComponent},
    {path:'view-orders',component:ViewOrdersAdminComponent},
    {path:'view-carwasher',component:ViewCarwashersComponent},
    {path:'view-customers',component:ViewCustomersComponent},
    {path: 'washpack',component: LoadWashpacksComponent, pathMatch: 'full'},
    { path: 'welcome', component: WelcomeAdminComponent}, 
    {path:'addwashpack',component:AddWashpackComponent},
    {path: 'washpack/update-washpacks/:packId',component: UpdateWashpacksComponent},
    {path: 'add/promos', component: AddPromosComponent},
    { path: 'view/promos',component: ViewPromosComponent},
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
