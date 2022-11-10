import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-no-login-productlist',
  templateUrl: './no-login-productlist.component.html',
  styleUrls: ['./no-login-productlist.component.css']
})
export class NoLoginProductlistComponent implements OnInit {
products:any=[]
category:any
  constructor(private productService:ProductServiceService) {
    
  }

 ngOnInit(): void {
   this.getAllProducts()
 }

 getAllProducts(){
   this.productService.getProducts().subscribe((productsdata)=>{
     console.log(productsdata);  
     this.products=productsdata
   })
 }
 filterList(){
  console.log("filter list running");
  this.productService.getProducts().subscribe((productsdata)=>{
    console.log(productsdata);  
    const tempList=productsdata
    const temp=[]
    console.log("category");
    if (this.category=="all"){
      this.products=tempList
    }
    else{
    for(let prod of tempList){
      if (prod.category==this.category){
        temp.push(prod)}
    }
    this.products=temp}
  })
}
}
