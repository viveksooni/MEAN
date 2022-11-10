import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserServiceService } from "./services/user-service.service";
@Injectable()
export class AuthGurad implements CanActivate{

    constructor(private userService:UserServiceService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.userService.getLogin())
        return true
        else{
            this.router.navigateByUrl("/")
            return false

        }
        
    }
}