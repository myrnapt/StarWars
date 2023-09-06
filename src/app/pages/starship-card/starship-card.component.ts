import { Component, Input, OnInit } from '@angular/core';
import { StarshipList } from 'src/app/interfaces/ships.interface';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent implements OnInit {

  selectedShip: any

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.selectedShip$.subscribe((nave) => {
      console.log('Nave seleccionada en componente B:', nave);
      this.selectedShip = nave;
    });
  }


}
