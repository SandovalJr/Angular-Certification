import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlname: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(nameCountry: string): Observable<any> {
    const url = `${this.urlname}/name/${nameCountry}`;
    return this.http.get(url);
  }
}
