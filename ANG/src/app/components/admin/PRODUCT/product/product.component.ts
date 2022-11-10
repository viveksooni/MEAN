import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:any
  @Output() notifyParent: EventEmitter <any> = new EventEmitter();
  c=0
  constructor(private productService:ProductServiceService,private router:Router) { }
  ngOnInit(): void {
  }


  deleteProduct(){
    this.productService.deleteProduct(this.product._id).subscribe((data)=>{
      console.log(data);
      this.notifyParent.emit(this.product);
    })
  }


  updateProduct(){
    this.productService.setUpdateId(this.product._id)
    this.router.navigateByUrl("/admindashboard/updateproduct")
  }

  sendMail(){
    
  }
}
