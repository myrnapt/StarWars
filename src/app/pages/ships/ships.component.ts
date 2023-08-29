import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent {

  shipsList!: any
  constructor( private api: AppService) {this.getShips()}
  getShips() {
     this.api.postApi().subscribe((data) => {
      this.shipsList = data
     } )
  }
}
