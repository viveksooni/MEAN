import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-login-product',
  templateUrl: './no-login-product.component.html',
  styleUrls: ['./no-login-product.component.css']
})
export class NoLoginProductComponent implements OnInit {
  @Input() product:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl("/login")
  }

}
