import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'vivek'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

//Router
//Angular.giveMeRouter
//Dependency Injection
constructor(private router: Router,
  private authenticationService: AuthenticationService) { }

ngOnInit() {

   if(sessionStorage.getItem("username"))
   {
      this.router.navigate(['welcome']);   
   }
}

handleLogin() {
   console.log(this.username);
  //if(this.username==="in28minutes" && this.password === 'dummy') {
  if(this.authenticationService.authenticate(this.username, this.password)) {
    //Redirect to Welcome Page
    console.log("call welcome");
    this.router.navigate(['welcome'])
    this.router.navigateByUrl
    this.invalidLogin = false
  } else {
    this.invalidLogin = true
  }
}

}
