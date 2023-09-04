import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login() {  // TIPO DE DATO QUE RECIBE
    console.log('logged')
  }

}
