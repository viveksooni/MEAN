import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products=[{name:"nikhil",brand:"UCB",price:100},{name:"nikhil2",brand:"LEWIS INDIA",price:200}]
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

  updateList(product:any){
    console.log("update list runnning");
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
