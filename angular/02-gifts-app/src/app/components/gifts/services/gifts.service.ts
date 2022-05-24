import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchGiftsResponse } from '../interfaces/gifts.interface';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private _historial: string[] = [];
  private api_key: string = 'QHkZriduhuPcSVNWBeFW5YpCYYvYUY34';

  public resultados: Gift[] = [];

  // obtener el historial y si cambia obtenerlo en el tiempo real
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    
  }

  // se va almacenando el historial
  buscarGifts(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    // el includes es para ver si lo que estamos agregando en el elemento lo incluye
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      // para no poder agregar mas de 10
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // console.log(query)

    this.http
      .get<SearchGiftsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=QHkZriduhuPcSVNWBeFW5YpCYYvYUY34&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        console.log(resp.data);

        this.resultados = resp.data;
      });

    // console.log(this._historial);
  }
}
