import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:any
  @Output() notifyParent: EventEmitter <any> = new EventEmitter();
  constructor(private userService:UserServiceService,private router:Router) { }
  
  ngOnInit(): void {
  }

  updateUser(){

  }

  deleteUser(){
    console.log(this.user._id); 
    this.userService.deleteUser(this.user._id).subscribe((data)=>{
      console.log(data);  
      this.notifyParent.emit(this.user);
      
    })
    
  }

  addCoupon(){
    const uid:any=this.userService.setIdForCoupon(this.user._id)
    this.router.navigateByUrl("/admindashboard/addcoupon")
  }
}
