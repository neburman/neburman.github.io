import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  ngOnInit() {          
    
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
