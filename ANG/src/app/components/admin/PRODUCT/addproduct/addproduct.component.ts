import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
category:any
  ProductForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required]),
      brand:new FormControl("",[Validators.required]),
      price:new FormControl("",[Validators.required]),
      stock:new FormControl("",[Validators.required]),
      imagelink:new FormControl("",[Validators.required]),
      // file: new FormControl('', [Validators.required]),
      
    
    }
  )
  
  constructor(private productService:ProductServiceService,private router:Router,
    private http:HttpClient) { }
  selectfile:any;

  onFileChange(event:any) {
  
    console.log(event)
  
   this.selectfile= event.target.files[0]
    
  }
  

  addProduct(){
    const formData = new FormData();
    const category=this.category
    
    formData.append('name', this.ProductForm.get('name')?.value)
    formData.append('file', this.selectfile)
    formData.append('brand', this.getBrand()?.value)
    formData.append('price', this.getPrice()?.value)
    formData.append('category', category)
    formData.append('stock', this.getStock()?.value)

    

   
   
    
    this.productService.addProduct(formData)
  alert("Product added Succesfully")
     this.router.navigateByUrl("admindashboard/allproducts")

   }


  getName(){
    return  this.ProductForm.get('name')
    }
    
   getBrand(){
    return this.ProductForm.get('brand')
   }

   getPrice(){
     return this.ProductForm.get('price')
   }

   getStock(){
    return this.ProductForm.get('stock')
   }
   getImageLink(){
    return this.ProductForm.get('imagelink')
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

 
   

  ngOnInit(): void {
  }

}
