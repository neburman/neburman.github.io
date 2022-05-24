import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }
  submitted = false;
  base = environment.base;

  form: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellido1: new FormControl(''),
    apellido2: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confpassword: new FormControl(''),
    direccion: new FormControl(''),
  });

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        apellido1: ['', Validators.required],
        apellido2: ['', ''],
        email: ['', [Validators.required, Validators.email]],
        password: ['',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        confpassword: ['', Validators.required],
        direccion: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confpassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }  

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    return this.http.put<Insert>(`${this.base}user/newUser`, this.form.value).subscribe(data => {
        if(data['inserted'] == true){
          //sweetalert message popup
          Swal.fire({
          title: 'Bienvenido!!',
          text:  "Usuario dado de alta correctamente",
          icon: 'success'
          });
          this.goToPage('main');
        }else{
          //sweetalert message popup
            Swal.fire({
            title: 'Error!!',
            text:  "El email ya existe",
            icon: 'error'
            });
            this.submitted = false;
        }
      });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

interface Usuario{
  email: string ;
  password: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  direccion: string;
}

interface Insert{
  inserted: boolean;
  error: string;
}