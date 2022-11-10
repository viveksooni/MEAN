import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get("http://localhost:3000/api/product/all")
  }
  addProduct( formData:FormData){
    const headers = { 'content-type': 'application/json'}   
    // const body=JSON.stringify(product);
    this.http.post("http://localhost:3000/api/product/add",formData).subscribe(()=>{
      console.log("Product added succesfully");     
    })  
  }

  deleteProduct(id: string){
    return this.http.delete("http://localhost:3000/api/product/delete/"+id)
  }

  updateProduct(id: any,product: { name: AbstractControl | null; stock: AbstractControl | null; price: AbstractControl | null}){
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(product);
    this.http.post("http://localhost:3000/api/product/update/"+id,body,{'headers':headers}).subscribe(()=>{
      console.log("Product updated succesfully");     
    }) 
  }

  updatePro(id: any,formdata:FormData){
    const headers = { 'content-type': 'application/json'}   
    
    this.http.post("http://localhost:3000/api/product/update/"+id,formdata,{'headers':headers}).subscribe(()=>{
      console.log("Product updated succesfully");     
    }) 
  }

  addSale(schema:{pname:any,pquant:any,odate:any,username:any}){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(schema);
    return this.http.post("http://localhost:3000/api/sales/add",body,{'headers':headers}) 
  }

  getSales():Observable<any>{
    return this.http.get("http://localhost:3000/api/sales/all")
  }

 updateId:any
  setUpdateId(id:any){
    this.updateId=id
  }

  getUpdateId(){
    return this.updateId
  }

  getProductbyId(id:any){
    return this.http.get("http://localhost:3000/api/product/"+id)
  
  }

}
