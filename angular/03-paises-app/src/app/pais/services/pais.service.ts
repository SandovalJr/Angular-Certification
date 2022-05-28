import { HttpClient, HttpParams } from '@angular/common/http';
import { partitionArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private urlname: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,cca2,flags,population'
      // 'name,capital,flags,cca2,population,translations,latlng'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPais(nameCountry: string): Observable<Country[]> {
    const url = `${this.urlname}/name/${nameCountry}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(capital: string): Observable<Country[]> {
    // console.log(capital);
    const urlc = `${this.urlname}/capital/${capital}`;
    return this.http.get<Country[]>(urlc, { params: this.httpParams });
  }

  buscarRegion(region: string) {
    const urlR = `${this.urlname}/region/${region}`;
    return this.http
      .get<Country[]>(urlR, { params: this.httpParams })
      .pipe(tap(console.log));
  }

  verPais(id: string) {
    const urlVer = `${this.urlname}/alpha/${id}`;
    return this.http.get<Country[]>(urlVer);
  }
}
