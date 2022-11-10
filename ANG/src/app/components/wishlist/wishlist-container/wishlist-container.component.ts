import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-wishlist-container',
  templateUrl: './wishlist-container.component.html',
  styleUrls: ['./wishlist-container.component.css']
})
export class WishlistContainerComponent implements OnInit {
  products=[]
  index=[]
  WishList:any=[]
  constructor(private productService:ProductServiceService,private userService:UserServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllProducts()
 }

 getAllProducts(){
   this.productService.getProducts().subscribe((productsdata)=>{
     console.log(productsdata);  
     this.products=productsdata
     this.getWishListIndex()
   })
 }

 getWishListIndex(){
  const userinfo=this.userService.getLoginInfo()
  const userId=userinfo._id
  console.log("current suer id",userId);
  this.userService.getUserById(userId).subscribe((data)=>{
    console.log("data",data)
    const gotData:any=data
    console.log("gotdata",gotData.user.wishlist);
    this.index=gotData.user.wishlist
    console.log("array",this.index);
    this.getRequiredList()
  })
 }

 getRequiredList(){
  for (let idx of this.index){
    console.log("idx",idx);
    this.productService.getProductbyId(idx).subscribe((data)=>{
      const currdata:any=data
      const currproduct:any=currdata.product
      console.log("curr prod",currproduct);
      if (currproduct!=null)
      this.WishList.push(currproduct)
    })
   }
  console.log("wishlist",this.WishList);
 }

 updateList(product:any){
  const tempArr=[]
  for(let prod of this.WishList){
    if (prod!=product){
  tempArr.push(prod)
    }
    this.WishList=tempArr
  }}


 }


