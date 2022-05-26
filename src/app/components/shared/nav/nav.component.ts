import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  registro: boolean = false;
  login: boolean = false;
  public show:boolean = false;

  constructor(private router: Router, public auth: AuthService, ) { }

  ngOnInit(): void {
    
    if(this.router.url === '/signup'){
      this.registro=true;
    }
    if(this.router.url === '/login'){
      this.login=true;
    }console.log(this.registro, this.login)
  }

  toggle() {
    this.show = !this.show;
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  logout(){
    Swal.fire({
      title: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('loggedIn');
      }
      window.location.reload();
    })
  }

  toggleCart():void{
    
  }
}
