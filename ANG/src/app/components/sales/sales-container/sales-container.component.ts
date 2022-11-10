import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-sales-container',
  templateUrl: './sales-container.component.html',
  styleUrls: ['./sales-container.component.css']
})
export class SalesContainerComponent implements OnInit {
salesArray=[]
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getSales().subscribe((data)=>{

      const gotData:any=data
      this.salesArray=gotData
      console.log(this.salesArray);
      
    })
  }



}
