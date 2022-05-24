import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/components/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'main', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
