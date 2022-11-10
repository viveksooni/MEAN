import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private userService:UserServiceService) { }

  showUsers(){
    this.router.navigateByUrl("/admindashboard/allusers")
  }

  addUser(){
    this.router.navigateByUrl("/admindashboard/adduser")

  }

  addProduct(){
    this.router.navigateByUrl("/admindashboard/addproduct")
    
  }
  showProducts(){
    this.router.navigateByUrl("/admindashboard/allproducts")
    
  }

logout(){
this.userService.setLogin(false)
alert("Success fully Logged Out Click Ok to Continue...")
this.router.navigateByUrl("")
}

  ngOnInit(): void {
  }

}
