import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users=[{name:"nikhil",email:"nikhilemail"},{name:"nikhil2",email:"nikhil2email"}]
  constructor(private userService:UserServiceService) {
    
   }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getUser().subscribe((usersdata)=>{
      console.log(usersdata);
       this.users=usersdata
    })
  }
  updateList(user:any){
    this.userService.getUser().subscribe((usersdata)=>{
      console.log(usersdata);
       this.users=usersdata
    })
  }
}
