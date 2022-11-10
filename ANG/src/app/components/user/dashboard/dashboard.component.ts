import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserServiceService,private router:Router) { }
  activeUserId:any
  activeUserInfo:any
  usersArray:any
  loadDashboard(){
    this.router.navigateByUrl("/dashboard/allproducts")
  }


  showCart(){
    this.router.navigateByUrl("/dashboard/cart")
    
  }
  showWishListed(){
    this.router.navigateByUrl("/dashboard/wishlisted")
    
  }

  showAll(){
    this.router.navigateByUrl("/dashboard/allproducts")
  }


  logout(){
    this.userService.setLogin(false)
    alert("You have succesfully logged out Click OK")
    this.router.navigateByUrl("/login")
  }

  ngOnInit(): void {
    
  }

}
