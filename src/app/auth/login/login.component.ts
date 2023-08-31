import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {}

  // CREAMOS VAR DONDE GUARDAR EL FORMULARIO
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]], // DECLARAMOS PROPIEDADES
    password: ['', [Validators.required]] // LLAMAMOS A LAS VALIDACIONES
  })

  // GETTERS PARA NO TENER QUE ESCRIBIR TANTO EN EL HTML
  get email() {
    return this.loginForm.controls.email
  }
  get  password() {
    return this.loginForm.controls.password
  }

  // FUNCION QUE SE EMITE AL TOCAR EL BOTON DE LOGIN
  login() {
    if (this.loginForm.valid) { // SI ES VALIDO
      this.loginService.login(this.loginForm.value as User) ;  // CONECTAMOS SERVICIO
      this.router.navigateByUrl('/ships'); // NAVEGAMOS AL COMPONENTE
      this.loginForm.reset(); // VACIAMOS FORMULARIO
    } else {
      this.loginForm.markAllAsTouched() // MARAMOS COMO TOCADO PARA MOSTRAR ERRORES
    }
  }
}