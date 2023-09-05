import { Component, Input, OnInit } from '@angular/core';
import { StarshipList } from 'src/app/interfaces/ships.interface';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent implements OnInit {

constructor( ) {}
  ngOnInit(): void {
    console.log(this.lista);
  }

@Input() lista: any[] = []



}
