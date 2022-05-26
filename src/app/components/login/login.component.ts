import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private auth: AuthService) { }
  base = environment.base;
  submitted = false;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  } 

  ngOnInit() {          
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }
    );
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  onSubmit(){
    var user = this.form.value;
    return this.auth.getLogin(user['email'], user['password']).subscribe(data => {
      if(data['loggued'] == true){
        //sweetalert message popup
        Swal.fire({
        title: 'Bienvenido '+ data['user']['Nombre'] + '!!',
        text:  "Inicio de sesión correcto",
        icon: 'success'
        });
        this.auth.setLoggedIn(true);
        this.goToPage('home');
      }else{
        //sweetalert message popup
          Swal.fire({
          title: 'Error!!',
          text:  "Usuario o contraseña incorrectos",
          icon: 'error'
          });
          this.auth.setLoggedIn(false);
          this.submitted = false;
      }
    });
  }

  resetPass(){
    var user = this.form.value;
    return this.auth.getResetPass(user['email']).subscribe(data =>{
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}