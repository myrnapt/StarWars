import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StarshipList, Starships } from '../interfaces/ships.interface';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  //CONECTAMOS LA API, ESPECIFICAMOS EL TIPO DE OBSERVABLE CON UNA INTERFAZ
  getShips(page: number): Observable<Starships> {
    return this.http.get<Starships>(`https://swapi.dev/api/starships/?page=${page}`);
  }

  // INFO NAVES INDIVIDUALES
  selectedShip = new BehaviorSubject<StarshipList | null>(null);
  selectedShip$ = this.selectedShip.asObservable();

  selectShip(nave: StarshipList) {
    this.selectedShip.next(nave);
  }


}
