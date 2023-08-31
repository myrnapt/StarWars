import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  

  login(info: User) {  // TIPO DE DATO QUE RECIBE
    console.log(info)
  }

}
