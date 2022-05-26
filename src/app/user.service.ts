import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base = environment.base;
  
  constructor(private http: HttpClient) {}

  getLogin(email: any, password: any){
    return this.http.get<Login>(`${this.base}user/login?email=`+email+`&password=`+password);
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