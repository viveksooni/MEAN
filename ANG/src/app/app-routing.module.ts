import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGurad } from './auth-guard.service';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './components/admin/adminregister/adminregister.component';
import { CartContainerComponent } from './components/cart/cart-container/cart-container.component';

import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginProductlistComponent } from './components/user/PRODUCT/login-productlist/login-productlist.component';
import { LoginComponent } from './components/user/login/login.component';

// import { NoLoginProductComponent } from './components/home/PRODUCT/no-login-product/no-login-product.component';
import { NoLoginProductlistComponent } from './components/home/PRODUCT/no-login-productlist/no-login-productlist.component';
import { AddproductComponent } from './components/admin/PRODUCT/addproduct/addproduct.component';
import { ProductlistComponent } from './components/admin/PRODUCT/productlist/productlist.component';
import { UpdateproductComponent } from './components/admin/PRODUCT/updateproduct/updateproduct.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AdduserComponent } from './components/admin/USER/adduser/adduser.component';
import { UserlistComponent } from './components/admin/USER/userlist/userlist.component';
import { WishlistContainerComponent } from './components/wishlist/wishlist-container/wishlist-container.component';

import { AddcouponComponent } from './components/admin/coupon/addcoupon/addcoupon.component';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { SalesContainerComponent } from './components/sales/sales-container/sales-container.component';

const routes: Routes = [
  
  {path:"dashboard",canActivate:[AuthGurad],component:DashboardComponent,children:[
    {path:"cart",component:CartContainerComponent},
    {path:"wishlisted",component:WishlistContainerComponent},
    {path:"allproducts",component:LoginProductlistComponent},
    {path:"",component:LoginProductlistComponent}
  ]},

  
  {path:"admindashboard",canActivate:[AuthGurad] ,component:AdmindashboardComponent,children:[
    {path:"allusers",component:UserlistComponent},
    {path:"adduser",component:AdduserComponent},
    {path:"allproducts",component:ProductlistComponent},
    {path:"",component:ProductlistComponent},
    {path:"addproduct",component:AddproductComponent},
    {path:"updateproduct",component:UpdateproductComponent},
    {path:"addcoupon",component:AddcouponComponent},
    {path:"bulk-add",component:BulkuploadComponent},
    {path:"salesreport",component:SalesContainerComponent}
   
    

  ]},

  
  {path:"",component:HomeComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"loginadmin",component:AdminloginComponent},  
    {path:"register", component:RegisterComponent},
    {path:"registeradmin", component:AdminregisterComponent}, 
    {path:"", component:NoLoginProductlistComponent}
    
  ]},
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
