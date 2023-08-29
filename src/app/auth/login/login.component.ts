import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  get email() {
    return this.loginForm.controls.email
  }
  get  password() {
    return this.loginForm.controls.password
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: AppService) {}

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value);
      this.router.navigateByUrl('/ships');
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched()
    }
  }
}
