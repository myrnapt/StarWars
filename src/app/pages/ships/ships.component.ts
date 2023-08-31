import { Component, OnInit } from '@angular/core';
import { StarshipList } from 'src/app/interfaces/ships.interface';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent  implements OnInit{

  
  constructor(private swapiService: SwapiService) {}
  
  // CARGAMOS AL ABRIR LA PAGINA
  ngOnInit(): void {
    this.getShips()
  }
  
  // VARIABLE LOGGIN
  userLogged: boolean = false

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
