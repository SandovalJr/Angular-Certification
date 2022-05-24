import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gift, SearchGiftsResponse } from '../interfaces/gifts.interface';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private _historial: string[] = [];
  private api_key: string = 'QHkZriduhuPcSVNWBeFW5YpCYYvYUY34';
  private url: string = 'https://api.giphy.com/v1/gifs';
  public resultados: Gift[] = [];

  // obtener el historial y si cambia obtenerlo en el tiempo real
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  // se va almacenando el historial
  buscarGifts(query: string = '') {
    // console.log('buscargif' + query);

    query = query.trim().toLocaleLowerCase();

    // el includes es para ver si lo que estamos agregando en el elemento lo incluye
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      // para no poder agregar mas de 10
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // console.log(query)

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('limit', '10')
      .set('q', query);

    console.log(params.toString());

    this.http
      .get<SearchGiftsResponse>(`${this.url}/search`,{ params })
      .subscribe((resp) => {
        console.log(resp.data);

        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });

    // console.log(this._historial);
  }
}
