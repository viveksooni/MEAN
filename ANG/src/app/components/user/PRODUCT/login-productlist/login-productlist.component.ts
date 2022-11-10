import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-login-productlist',
  templateUrl: './login-productlist.component.html',
  styleUrls: ['./login-productlist.component.css']
})
export class LoginProductlistComponent implements OnInit {

  productList:any
  category:any

  constructor(private productService:ProductServiceService) { 
  }
  getProducts(){
   this.productService.getProducts().subscribe((data)=>{
    this.productList=data
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
        this.productList=tempList
      }
      else{
      for(let prod of tempList){
        if (prod.category==this.category){
          temp.push(prod)}
      }
      this.productList=temp}
    })
  }

  ngOnInit(): void {
    this.getProducts()  
    
  }

}
