import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  postJsonValue: any;
  constructor(private http: HttpClient) {}

  postApi() {
    let url = 'https://swapi.dev/api/starships/1';
    return this.http.get(url);
  }

  login(info: any) {
    console.log(info);
    this.postApi();
  }
}
