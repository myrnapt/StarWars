import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarshipList, Starships } from 'src/app/interfaces/ships.interface';
import { SwapiService } from 'src/app/services/swapi.service';

declare var window: any;

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  
  constructor(private swapiService: SwapiService, private router: Router) {}
  
  //  AL CARGAR WEB TRAEMOS NAVES Y MODAL
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.getShips();
      this.formModal = new window.bootstrap.Modal(
        document.getElementById('myModal')
      );
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

  // DECLARAMOS LISTA BASADA EN LA INTERFAZ
  
  
  // TRAEMOS EL SERVICIO DE LA API
  getShips() {
    if (this.page === 4) {
      return
    }
    this.swapiService.getShips(this.page)
    .subscribe((data) => {
      this.shipsList = data.results; // DATA RESULTS ES EL ARRAY CON LAS NAVS
    });
  }
  
  shipsList: StarshipList[] = [];

   lista: any[] = [1,2,3,4,5, 'fdgdg']

  // SCROLL INFINITO
  onScroll(){
    if (this.page === 4) {
      return;
    }
    this.swapiService.getShips(++this.page)
      .subscribe((response: Starships) => {
        this.shipsList.push(...response.results);
      })
  }
  
  //MODAL
  formModal: any;
  page: number = 1
  openFormModal() {
     this.formModal.show();
  }
}
