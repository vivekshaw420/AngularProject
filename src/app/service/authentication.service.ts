import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

authenticate(Username , Password)
{

  if(Username = "vivek"  && Password == 123)
  {
      console.log("session");
    sessionStorage.setItem("username" , Username);
    return  true;
  }  
  return  false; 
}

 // Not allow with out log in 
isLogedIn()
  {
    let username  = sessionStorage.getItem("username");

    if(username == null)
    {
      return false;
    }
   console.log("login return true");
    return true;



    
  }

  logOut()
  {

    sessionStorage.removeItem("username");
    
    console.log("name removed");

  }
}
