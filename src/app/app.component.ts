import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  base = environment.base;
  email: string = '';
  password: string = '';
  confpassword: string = '';
  nombre: string = '';
  apellido1: string ='';
  apellido2: string ='';
  direccion: string='';

  ngOnInit() {          
    
  }

  goToPage(pageName:string):void{
    console.log("pepeS");
    //this.router.navigate([`${pageName}`]);
    
  }

}

