import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  registro: boolean = false;
  login: boolean = false;
  
  public show:boolean = false;

  event$
  constructor(private router: Router, public auth: AuthService, ) {
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                console.log(event.url); 
                if(event.url === '/signup'){
                  this.registro=true;
                }else{
                  this.registro=false;
                }
                if(event.url === '/login'){
                  this.login=true;
                }else{
                  this.login=false;
                }
              }
            });
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
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

}
