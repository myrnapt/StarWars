import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userLoginIn: boolean = false
  token = localStorage.getItem('token')
  
  ngOnInit(): void {
    if (this.token) {
      this.userLoginIn = false
    } else {
      this.userLoginIn = true
    }
  }

}
