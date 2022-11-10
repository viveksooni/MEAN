import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.component.html',
  styleUrls: ['./addcoupon.component.css']
})
export class AddcouponComponent implements OnInit {

  constructor(private userService:UserServiceService) { }
  couponCode:any
  discountPercent:any
  ngOnInit(): void {
  }
  addCoupon(){
    const uid=this.userService.getIdForCoupon()
    const couponcode:any=this.couponCode
    const discountpercent:any=this.discountPercent
    console.log("addcoupon runing");
    this.userService.addCoupon({uid,couponcode,discountpercent}).subscribe((data)=>{
      console.log(data);
      alert("Coupon Added Successfully")    
    })

  }
}
