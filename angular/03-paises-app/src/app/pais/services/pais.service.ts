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
    return this.http.get<Country[]>(urlc) ;
  }

  
}
