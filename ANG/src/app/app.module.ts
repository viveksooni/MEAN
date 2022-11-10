import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/user/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { AuthGurad } from './auth-guard.service';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './components/admin/adminregister/adminregister.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { UserComponent } from './components/admin/USER/user/user.component';
import { UserlistComponent } from './components/admin/USER/userlist/userlist.component';
import { AdduserComponent } from './components/admin/USER/adduser/adduser.component';
import { ProductComponent } from './components/admin/PRODUCT/product/product.component';
import { AddproductComponent } from './components/admin/PRODUCT/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/admin/PRODUCT/updateproduct/updateproduct.component';
import { ProductlistComponent } from './components/admin/PRODUCT/productlist/productlist.component';
import { NoLoginProductComponent } from './components/home/PRODUCT/no-login-product/no-login-product.component';
import { NoLoginProductlistComponent } from './components/home/PRODUCT/no-login-productlist/no-login-productlist.component';
import { LoginProductlistComponent } from './components/user/PRODUCT/login-productlist/login-productlist.component';
import { LoginProductComponent } from './components/user/PRODUCT/login-product/login-product.component';
import { WishlistItemComponent } from './components/wishlist/wishlist-item/wishlist-item.component';
import { WishlistContainerComponent } from './components/wishlist/wishlist-container/wishlist-container.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartContainerComponent } from './components/cart/cart-container/cart-container.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { MatSidenavModule} from "@angular/material/sidenav";
import {  MatListModule } from "@angular/material/list";
import { AddcouponComponent } from './components/admin/coupon/addcoupon/addcoupon.component';
import { SalesItemComponent } from './components/sales/sales-item/sales-item.component';
import { SalesContainerComponent } from './components/sales/sales-container/sales-container.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AdminloginComponent,
    AdminregisterComponent,
    AdmindashboardComponent,
    UserComponent,
    UserlistComponent,
    AdduserComponent,
    ProductComponent,
    AddproductComponent,
    UpdateproductComponent,
    ProductlistComponent,
    NoLoginProductComponent,
    NoLoginProductlistComponent,
    LoginProductlistComponent,
    LoginProductComponent,
    WishlistItemComponent,
    WishlistContainerComponent,
    CartItemComponent,
    CartContainerComponent, 
    AddcouponComponent, SalesItemComponent, SalesContainerComponent,
  

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [AuthGurad],
  bootstrap: [AppComponent]
})
export class AppModule { }
