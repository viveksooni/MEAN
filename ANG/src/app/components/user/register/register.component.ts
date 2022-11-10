import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm = new FormGroup(
    {
      username:new FormControl("",[Validators.required,Validators.minLength(3)]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
      email:new FormControl("",[Validators.required,Validators.minLength(6)]),
      phone:new FormControl("",[Validators.required,Validators.minLength(10)]),
      
      
    }
  )
  constructor(private userService:UserServiceService,private router:Router) { }
  getUsername(){
    return  this.loginForm.get('username')
    }
    
   getPassword(){
    return this.loginForm.get('password')
   }

   getEmail(){
     return this.loginForm.get('email')
   }

   getPhone(){
     return this.loginForm.get('phone')
   }
  getUsernameError(){
    if(this.getUsername()?.invalid && (this.getUsername()?.dirty||this.getUsername()?.touched)){
      if (this.getUsername()?.hasError('required'))
        return "username should not be blank"
      else if (this.getUsername()?.hasError('minlength'))
        return "username can not be less than 3 character"    
      else
        return "ok";
    }
    else
      return ""
   }
  
   getPasswordError(){
    if(this.getPassword()?.invalid && (this.getPassword()?.dirty||this.getPassword()?.touched)){
      
      if (this.getPassword()?.hasError('required'))
        return "Password should not be blank"
      else if (this.getPassword()?.hasError('minlength'))
        return "Password can not be less than 6 character"    
      else
        return "ok";
    }
    else
      return ""
   }

   getEmailError(){
    if(this.getEmail()?.invalid && (this.getEmail()?.dirty||this.getEmail()?.touched)){
      
      if (this.getEmail()?.hasError('required'))
        return "Email should not be blank"
      else if (this.getEmail()?.hasError('minlength'))
        return "Email can not be less than 6 character"    
      else
        return "ok";
    }
    else
      return ""
   }
   getPhoneError(){
    if(this.getPhone()?.invalid && (this.getPhone()?.dirty||this.getPhone()?.touched)){
      
      if (this.getPhone()?.hasError('required'))
        return "Phone no should not be blank"
      else if (this.getPhone()?.hasError('minlength'))
        return "Phone number can not be less than 10 character"    
      else
        return "ok";
    }
    else
      return ""
   }
  

   register(){
     const userName=this.loginForm.get('username')?.value
     const Password=this.getPassword()?.value
     const Email=this.getEmail()?.value
     const Phone=this.getPhone()?.value
     const UserType="Customer"
     const WishList:[]= []
     const CartList:[]= []

     this.userService.register({userName,Password,Email,Phone,UserType,WishList,CartList})
     alert("Registration Success ...... now login to continue!!!")
     this.router.navigateByUrl("/login")

   }


  ngOnInit(): void {
  }

}
