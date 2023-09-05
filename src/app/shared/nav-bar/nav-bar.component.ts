import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userLoginIn: boolean = false
  token: any = localStorage.getItem('token')
  
  ngOnInit(): void {
    if (this.token) {
      this.userLoginIn = true
    } else {
      this.userLoginIn = false
    }
  }

}
