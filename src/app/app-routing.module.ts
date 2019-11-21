import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RootGuardService } from './service/root-guard.service';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';

// include all the routes here for component 
const routes: Routes = [
{ path: '', component: LoginComponent  },
{path : 'login', component :LoginComponent},
{path : "welcome/:name" , component : WelcomeComponent , canActivate:[RootGuardService]},
{path:"logout" , component : LogoutComponent, canActivate:[RootGuardService]},
{path :  "**" , component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
