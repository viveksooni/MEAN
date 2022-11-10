import { not } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() product:any
  @Output() notifyParent: EventEmitter <any> = new EventEmitter();
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

    deleteProduct(){
      const userInfo=this.userService.getLoginInfo()
      const uid:any=userInfo._id
      const pid:any=this.product._id
      this.userService.deleteWishListItem({uid,pid}).subscribe((data)=>{
        console.log(data);
        this.notifyParent.emit(this.product)
        
      })

  }

}
