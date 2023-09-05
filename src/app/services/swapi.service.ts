import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starships } from '../interfaces/ships.interface';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  //CONECTAMOS LA API, ESPECIFICAMOS EL TIPO DE OBSERVABLE CON UNA INTERFAZ
  getShips(page: number): Observable<Starships> {
    return this.http.get<Starships>(`https://swapi.dev/api/starships/?page=${page}`);
  }
}
