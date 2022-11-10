import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      username:new FormControl("",[Validators.required,Validators.minLength(3)]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)])
    }
  )

  constructor(
    private userService:UserServiceService,
    private router:Router,
) { }

  getUsername(){
  return  this.loginForm.get('username')
  }
  
 getPassword(){
  return this.loginForm.get('password')
 }

 getUsernameError(){
  if(this.getUsername()?.invalid && (this.getUsername()?.dirty||this.getUsername()?.touched)){
    
    
    // return "User Name should not be blank"
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
 allUsers:any
// username:any;
// password:any
 login(){
  const userName=this.getUsername()?.value
  const Password=this.getPassword()?.value
  console.log(userName,Password);
  this.userService.loginCAdmin({userName,Password}).subscribe((data)=>{
    console.log("from compoment",data.loginstatus);
     if (data.loginstatus==true){
      this.userService.setLogin(true)
       this.router.navigateByUrl("/admindashboard")
     }
     else{
      alert("Wrong Credentials")
     }
  })

  // console.log("from compoememt",loginStatus)

  // this.userService.getUser().subscribe((users)=>{
  //   this.allUsers=users
  //   console.log("allusers",this.allUsers);
  //   this.validate();
    
       
  // }) 
 }
 

  ngOnInit(): void {
  }

}
