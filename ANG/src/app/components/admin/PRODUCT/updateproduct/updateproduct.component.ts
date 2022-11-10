import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  ProductForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required]),
      brand:new FormControl("",[Validators.required]),
      price:new FormControl("",[Validators.required]),
    
    }
  )
  constructor(private productService:ProductServiceService,private router:Router) { }
  getName(){
    return  this.ProductForm.get('name')
    }
    
   getBrand(){
    return this.ProductForm.get('brand')
   }

   getPrice(){
     return this.ProductForm.get('price')
   }

  getNameError(){
    if(this.getName()?.invalid && (this.getName()?.dirty||this.getName()?.touched)){
      if (this.getName()?.hasError('required'))
        return "Name should not be blank"
      else if (this.getName()?.hasError('minlength'))
        return "Name can not be less than 3 character"    
      else
        return "ok";
    }
    else
      return ""
   }
  
   getBrandError(){
    if(this.getBrand()?.invalid && (this.getBrand()?.dirty||this.getBrand()?.touched)){
      
      if (this.getBrand()?.hasError('required'))
        return "Brand Name should not be blank"
      else if (this.getBrand()?.hasError('minlength'))
        return "Brand  can not be less than 6 character"    
      else
        return "ok";
    }
    else
      return ""
   }

   getPriceError(){
    if(this.getPrice()?.invalid && (this.getPrice()?.dirty||this.getPrice()?.touched)){
      
      if (this.getPrice()?.hasError('required'))
        return "Price should not be blank"
      else if (this.getPrice()?.hasError('minlength'))
        return "Email can not be less than 6 character"    
      else
        return "ok";
    }
    else
      return ""
   }
  
  
  
   updateProduct(){

    const name:any=this.ProductForm.get('name')?.value
     const brand:any=this.getBrand()?.value
     const stock:any=brand
     const price:any=this.getPrice()?.value
     const productId:any=this.productService.getUpdateId()
     this.productService.updateProduct(productId,{name,stock,price})
     alert("Product Updated Succesfully on Clicking ok You will be directed to All Product List")
     this.router.navigateByUrl("admindashboard/allproducts")

   }



  ngOnInit(): void {
  }

}
