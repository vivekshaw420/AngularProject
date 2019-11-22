import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RootGuardService implements CanActivate {
  
  constructor(private router : Router , private authenticationService : AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
     if(this.authenticationService.isLogedIn())
     {
       //console.log("");
       return true;
         
     }  
       
     //console.log("guard");
     this.router.navigate(["login"])
    //throw new Error("Method not implemented.");
    return false;

  }

  
}
