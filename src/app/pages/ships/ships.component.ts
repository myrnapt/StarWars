import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarshipList } from 'src/app/interfaces/ships.interface';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent  implements OnInit{

  
  constructor(private swapiService: SwapiService, private router: Router) {}
  
  // CARGAMOS AL ABRIR LA PAGINA
  // VARIABLE LOGGIN

  ngOnInit() {
    this.getShips()
  }
  
  logout() {
    const confirmation = confirm('Do you want to log out?')
    if (confirmation) {
      localStorage.removeItem('token')
      this.router.navigateByUrl('/home')
    }
  }


  // DECLARAMOS LISTA BASADA EN LA INTERFAZ
  shipsList: StarshipList[] = [];

  // TRAEMOS EL SERVICIO DE LA API
  getShips() {
    this.swapiService.getShips()
      .subscribe(data => {
        this.shipsList = data.results // DATA RESULTS ES EL ARRAY CON LAS NAVS
      })
  }
}
