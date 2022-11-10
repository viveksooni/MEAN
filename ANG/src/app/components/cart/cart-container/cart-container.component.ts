import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {
  cartArray:any=[];
  totalamount=0
  idAmount=[]
  couponInput:any
  discountPercent=0
  couponStatus=false
  constructor(private userService:UserServiceService,private productService:ProductServiceService) { }
  getProductId(){
  const userinfo=this.userService.getLoginInfo()
  const userId=userinfo._id
  console.log("current suer id",userId);
  this.userService.getUserById(userId).subscribe((data)=>{
    console.log("data",data)
    const gotData:any=data
    this.idAmount=gotData.user.cartlist
    console.log("array",this.idAmount);
    this.getRequiredList()
  })
  }

  getRequiredList(){
    this.totalamount=0
    for ( let i=0;i<this.idAmount.length;i++){
      const idx=this.idAmount[i][0]
      const quantity=this.idAmount[i][1]
      console.log("quantitity",quantity);
      console.log("idx",idx);
      this.productService.getProductbyId(idx).subscribe((data)=>{
        const currdata:any=data
        const currproduct:any=currdata.product
        console.log("curr prod",currproduct);  
        if (currproduct!=null){
        this.cartArray.push({id:currproduct._id,name:currproduct.name,brand:currproduct.brand,price:currproduct.price,quantity:quantity,stock:currproduct.stock})
        this.totalamount+=currproduct.price*quantity
      }})
     }
    console.log("cart Array",this.cartArray);
  }
  placeOrder(){
    const userinfo=this.userService.getLoginInfo()
    const uid=userinfo._id
    const username = userinfo.username
    for(let prod of this.cartArray){
      const id=prod.id
      const name=prod.name
      const price=prod.price
      const stock:any=prod.stock-prod.quantity
      console.log("stock",stock,id,name,price);
       if(stock<10){
        console.log("sending mail");       
        this.userService.sendMail({name,stock}).subscribe((data)=>{
          console.log(data);
          
        })
       }    
      this.productService.updateProduct(id,{name,price,stock})
      this.userService.emptyCart({uid}).subscribe((data)=>{
        console.log(data);
        
      })
    

      const pname=name;
      const pquant=prod.quantity
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const odate=date
      this.productService.addSale({pname,pquant,odate,username}).subscribe((data)=>{
        console.log(data);
        
      })
    }
    alert("Order has been placed Successfully")
  }

  updateList(pid:any){
    this.cartArray=[]
    this.getProductId()
  }


  applyCoupon(){
    const userinfo=this.userService.getLoginInfo()
    const uid=userinfo._id
    this.userService.getUserById(uid).subscribe((data)=>{
      const gotData:any=data
      const couponArray=gotData.user.couponlist
      console.log("couponArray",couponArray);
      
      for(let i=0;i<couponArray.length;i++){
        
        console.log("couponstatus",this.couponStatus,couponArray[i]);
        if (couponArray[i][0]==this.couponInput){
          const percent=couponArray[i][1]
          console.log("percent type",typeof(percent));
          
          this.discountPercent=percent
          this.couponStatus=true
        }
      }
    }) 
  }


  ngOnInit(): void {
    this.getProductId()
  }}
