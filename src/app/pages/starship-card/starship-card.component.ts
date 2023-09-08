import { Component, Input, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service'; 

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent implements OnInit {
  
  constructor(private swapiService: SwapiService) {}

  @Input() starshipId: number = 1
  selectedShip: any;
  urlImg: string = 'https://starwars-visualguide.com/assets/img/starships/';


  ngOnInit(): void {
    this.swapiService.selectedShip$.subscribe((nave) => {
      console.log('Nave seleccionada en componente B:', nave);
      this.selectedShip = nave;
    });
  }

  // getShipCard(id: number) {
  //   this.selectedShip = this.SwapiService.getShipsImages(id)
  //     .subscribe(resp => {
  //       this.selectedShip = resp;
  //     });
  // }

  // getImageUrl(id: number): string {
  //   return `${this.urlImg}${id}.jpg`;
  // }

}
