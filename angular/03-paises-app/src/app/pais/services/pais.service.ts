import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlname: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(nameCountry: string): Observable<Country[]> {
    const url = `${this.urlname}/name/${nameCountry}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(capital: string): Observable<Country[]> {
    // console.log(capital);
    const urlc = `${this.urlname}/capital/${capital}`;
    return this.http.get<Country[]>(urlc);
  }

  buscarRegion(region: string) {
    const urlR = `${this.urlname}/region/${region}`;
    return this.http.get<Country[]>(urlR);
  }

  verPais(id: string) {
    const urlVer = `${this.urlname}/alpha/${id}`;
    return this.http.get<Country[]>(urlVer);
  }
}
