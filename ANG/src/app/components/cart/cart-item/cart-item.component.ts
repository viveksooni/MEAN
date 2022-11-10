import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:any
  buttonStatus=false
  @Output() notifyParent: EventEmitter <any> = new EventEmitter();
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.checkButton()
  }

  checkButton(){
    console.log("stocks,qty",this.cartItem.stock,this.cartItem.quantity);
    
    if (this.cartItem.stock<=this.cartItem.quantity)
    this.buttonStatus=true
  }

  increaseCount(){
    const loginInfo=this.userService.getLoginInfo()
    const username= loginInfo.username
    const uid=loginInfo._id
    const pid=this.cartItem.id
    const qty=this.cartItem.quantity
      this.userService.deleteCartListItem({uid,pid,qty,username}).subscribe((Data)=>{
        console.log(Data);
        const quantity=qty+1
        this.userService.addInCartList({uid,pid,quantity,username}).subscribe((data)=>{
          console.log(data);
          this.notifyParent.emit(pid)
          
        })  
      })

  }

  decreaseCount(){
    const loginInfo=this.userService.getLoginInfo()
    console.log("hello",loginInfo.username)
    const username= loginInfo.username
    const uid=loginInfo._id
    const pid=this.cartItem.id
    const qty=this.cartItem.quantity
      this.userService.deleteCartListItem({uid,pid,qty,username}).subscribe((Data)=>{
        console.log(Data);
        if (qty>1){
        const quantity=qty-1
        this.userService.addInCartList({uid,pid,quantity,username}).subscribe((data)=>{
          this.notifyParent.emit(pid)
        })
        }else{
          this.notifyParent.emit(pid)
        }      
      })
    
  
  }

}
