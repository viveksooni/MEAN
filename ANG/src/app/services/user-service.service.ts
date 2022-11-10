import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  register(user: { userName: AbstractControl | null; Password: AbstractControl | null; Email: AbstractControl | null; Phone: AbstractControl | null; UserType: string; WishList: any[]; CartList: any[]; }){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(user);
    this.http.post("http://localhost:3000/api/user/signup",body,{'headers':headers}).subscribe(()=>{
      console.log("user added succesfully");     
    })  
  }

  registerAdmin(user: { userName: AbstractControl | null; Password: AbstractControl | null; Email: AbstractControl | null; Phone: AbstractControl | null}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(user);
    this.http.post("http://localhost:3000/api/admin/signup",body,{'headers':headers}).subscribe(()=>{
      console.log("admin added succesfully");     
    })  
  }

  loginC(user: { userName: AbstractControl | null; Password: AbstractControl | null}){
    console.log("in login c");
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(user);
    return this.http.post("http://localhost:3000/api/login",body,{'headers':headers})
    
  }

  loginCAdmin(user: { userName: AbstractControl | null; Password: AbstractControl | null}){
    console.log("in login c Admin");
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(user);
    return this.http.post <any>("http://localhost:3000/api/adminlogin",body,{'headers':headers})
  }

  getUser():Observable<any>{
    return this.http.get("http://localhost:3000/api/user/all")
  }


  getUserById(id:number){
    return this.http.get("http://localhost:3000/api/user/"+id)
  }
  
  deleteUser(id:number){
    console.log("fun urning"); 
    return this.http.delete("http://localhost:3000/api/user/delete/"+id)
  }

  login:any
  setLogin(status:boolean){
    this.login=status

  }

  getLogin(){
    return this.login
  }
  loginInfo:any
  setLoginInfo(user:any){
    this.loginInfo=user
  }
  getLoginInfo(){
    return this.loginInfo
  }

  addInCartList(schema:{uid:any,pid:any,quantity:any,username:any}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    return this.http.post <any>("http://localhost:3000/api/product/cart",body,{'headers':headers})

  }
  addInWishList(schema:{uid:any,pid:any}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    return this.http.post <any>("http://localhost:3000/api/product/wishlist",body,{'headers':headers})
  }

  deleteWishListItem(schema:{uid:any,pid:any}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    return this.http.post <any>("http://localhost:3000/api/product/deletewishlist",body,{'headers':headers})

  }
  deleteCartListItem(schema:{uid:any,pid:any,qty:any,username:any}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    return this.http.post <any>("http://localhost:3000/api/product/deletecartlist",body,{'headers':headers})

  }
  updateCartItem(schema:{uid:any,pid:any,quantity:any,inc:any}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    return this.http.post <any>("http://localhost:3000/api/product/updatecart",body,{'headers':headers})
  }
  emptyCart(schema:{uid:any}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    console.log("empty cart running");
    
    return this.http.post <any>("http://localhost:3000/api/cart/empty",body,{'headers':headers})
  }

  sendMail(schema:{name:any,stock:any}){
    console.log("service running");
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    return this.http.post <any>("http://localhost:3000/api/sendmail",body,{'headers':headers})
  }

  addCoupon(schema:{uid:any,couponcode:any,discountpercent:any}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(schema);
    return this.http.post <any>("http://localhost:3000/api/coupon/add",body,{'headers':headers})

  }
  idForCoupon:any
    setIdForCoupon(uid:any){
  this.idForCoupon=uid

    }

  getIdForCoupon(){
    return this.idForCoupon
  }


}
