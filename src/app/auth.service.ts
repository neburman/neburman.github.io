import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base = environment.base;
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) {

  }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getUser(){
    return this.http.get(`${this.base}users`);
  }

  getLogin(email: any, password: any){
    return this.http.get<Login>(`${this.base}user/login?email=`+email+`&password=`+password);
  }

  getResetPass(email: any){
    return this.http.post<any>(`${this.base}user/resetPassword/`+ email, null);
  }

}


interface Login{
  loggued : boolean;
  user : LoguedUser;
}

interface LoguedUser{
  Nombre : string;
  Email : string;
  Auth : boolean;
}