import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-login-product',
  templateUrl: './login-product.component.html',
  styleUrls: ['./login-product.component.css']
})
export class LoginProductComponent implements OnInit {
  constructor(private userService:UserServiceService,private productService:ProductServiceService,private http:HttpClient) { }
  @Input() product:any
  amounttoadd=0;
  buttonStatus=true
  c=0
  setbutton(){
    if (this.product.stock>0){
      this.buttonStatus=false
    }
    else
    this.buttonStatus=true
  }
  addWishList(){
    const userInfo=this.userService.getLoginInfo()
    const userId=userInfo._id
    this.userService.getUserById(userId).subscribe((data)=>{
    const gotData:any=data
    const wishList=gotData.user.wishlist
    console.log("wishlsit",wishList);  
    const uid:any=userInfo._id
    const pid:any=this.product._id
      if (wishList.includes(this.product._id))
      alert("Product already present in wish List")
      else{
      this.userService.addInWishList({uid,pid}).subscribe((data)=>{
      const recievedData:any=data
      const updatedList=recievedData.newlist
      alert("Product added Successfully")
      
    })
  }
    })

    
  }

  addCart(){
    const userInfo=this.userService.getLoginInfo()
    console.log(userInfo)
    console.log(userInfo._id,this.product._id);
    console.log(("id"+userInfo._id,"name"+userInfo.username))
    const uid:any=userInfo._id
    const username:any = userInfo.username
    const pid:any=this.product._id
    var cartList:any=[]
    this.userService.getUserById(uid).subscribe((data)=>{
      const gotData:any=data
      cartList=gotData.user.cartlist
      for(let idAmount of cartList){
        console.log("id amount",idAmount);  
        if (idAmount[0]==pid){
          alert("Product is already present in Cart")
          return
        }
      }
      const quantity:any=1
      this.userService.addInCartList({uid,pid,quantity,username}).subscribe((data)=>{
        console.log(data);
        alert("Product successfully added")
         
      })
    })

  }

  // addWishList(){
  //   const activeUserId=this.bookService.getActiveUser()
  //   this.userService.getUserById(activeUserId)
  //   .subscribe((user)=>{
  //     this.userDetails=user
  //     console.log("active user",activeUserId);
  //     const wishListArray=this.userDetails.WishList
  //     const currBookId=this.book.id

  //     if (wishListArray.includes(currBookId))
  //     alert("Book already present in wish List")

  //     else{
      
  //     this.userDetails.WishList.push(this.book.id)
  //     this.userService.deleteUser(activeUserId).subscribe()

  //      const headers = { 'content-type': 'application/json'}   
  //      const body=JSON.stringify(this.userDetails);
  //      alert("Book added SuccesFully")
  //     this.http.post("http://localhost:3000/Users",body,{'headers':headers}).subscribe(()=>{
      
  //      })
      
  //     } 

    
  //   })
    

  // }  
  // addCompleted(){
    
  //   const activeUserId=this.bookService.getActiveUser()
    

  //   this.userService.getUserById(activeUserId)
  //   .subscribe((user)=>{
  //     this.userDetails=user
  //     console.log("active user",activeUserId);
  //   const completedBookArray=this.userDetails.Completed
  //   const currentBookId=this.book.id

  //   if(completedBookArray.includes(currentBookId))
  //   alert("Book already present in Completed List")

  //   else{
      
  //     this.userDetails.Completed.push(this.book.id)
  //     this.userService.deleteUser(activeUserId).subscribe()

  //      const headers = { 'content-type': 'application/json'}   
  //      const body=JSON.stringify(this.userDetails);
  //      alert("Book added SuccesFully")
  //     this.http.post("http://localhost:3000/Users",body,{'headers':headers}).subscribe(()=>{
            
  //      })  
  //     }
    
  //   })
    

  // }



  ngOnInit(): void {
  }

}
