import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( private router:Router) {}
  userLoginIn: boolean = false
  token = localStorage.getItem('token')
  
  ngOnInit(): void {
    if (this.token) {
      this.userLoginIn = false
    } else {
      this.userLoginIn = true
    }
  }
  

  // DESCONECTAR
  logout() {
    const confirmation = confirm('Do you want to log out?');
    if (confirmation) {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/home');
    }
  }
}
