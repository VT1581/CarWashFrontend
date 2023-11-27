import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { LoginComponent } from './Components/login/login.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { HomeComponent } from './Components/homepage/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_Auth/auth.guard';
import { AuthInterceptor } from './_Auth/auth.interceptor';
import { UserService } from './_Services/user.service';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminComponent } from './Components/adminpage/admin/admin.component';
import { CustomerComponent } from './Components/customerpage/customer/customer.component';
import { CarwasherComponent } from './Components/carwasherpage/carwasher/carwasher.component';
import { AboutusComponent } from './Components/homepage/aboutus/aboutus.component';
import { ContactusComponent } from './Components/homepage/contactus/contactus.component';
import { NavbarComponent } from './Components/homepage/navbar/navbar.component';
import { MyOrdersComponent } from './Components/customerpage/my-orders/my-orders.component';
import { ViewOrdersComponent } from './Components/adminpage/view-orders/view-orders.component';
import { WelcomeWasherComponent } from './Components/carwasherpage/welcome-washer/welcome-washer.component';
import { AddPromosComponent } from './Components/adminpage/add-promos/add-promos.component';
import { UpdateWashpacksComponent } from './Components/adminpage/update-washpacks/update-washpacks.component';
import { ViewCarwashersComponent } from './Components/adminpage/view-carwashers/view-carwashers.component';
import { ViewCustomersComponent } from './Components/adminpage/view-customers/view-customers.component';
import { ViewOrdersAdminComponent } from './Components/adminpage/view-orders-admin/view-orders-admin.component';
import { WelcomeAdminComponent } from './Components/adminpage/welcome-admin/welcome-admin.component';
import { PlaceOrdersComponent } from './Components/customerpage/place-orders/place-orders.component';
import{UpdateOrdersComponent} from './Components/customerpage/update-orders/update-orders.component';
import{ViewPromosComponent} from './Components/adminpage/view-promos/view-promos.component';
import { CommonModule } from '@angular/common';
import{LoadWashpacksComponent}from'./Components/adminpage/load-washpacks/load-washpacks.component';
import{ViewWashpacksComponent} from './Components/customerpage/view-washpacks/view-washpacks.component';
import { AddWashpackComponent } from './Components/adminpage/add-washpack/add-washpack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
    AdminComponent,
    CustomerComponent,
    CarwasherComponent,
    AboutusComponent,
    ContactusComponent,
    NavbarComponent,
    MyOrdersComponent,
    ViewOrdersComponent,
    WelcomeWasherComponent,
    AddPromosComponent,
    UpdateWashpacksComponent,
    ViewCarwashersComponent,
    ViewCustomersComponent,
    ViewOrdersAdminComponent,
    WelcomeAdminComponent,
    PlaceOrdersComponent,
    UpdateOrdersComponent,
    ViewPromosComponent,
    LoadWashpacksComponent,
    ViewWashpacksComponent,
    AddWashpackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
