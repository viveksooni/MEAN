import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  showProducts(){
    this.router.navigateByUrl("")
  }

  login(){
    this.router.navigateByUrl("/login")
  }

  adminLogin(){
    this.router.navigateByUrl("/loginadmin")
  }
  register(){
    this.router.navigateByUrl("/register")
  }
  registerAdmin(){
    this.router.navigateByUrl("/registeradmin")
  }
  

  ngOnInit(): void {
  }

}
