import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  private _historial: string[] = [];

  // obtener el historial y si cambia obtenerlo en el tiempo real
  get historial() {
    return [...this._historial];
  }

  // se va almacenando el historial 
  buscarGifts(query: string) {
    this._historial.unshift(query);
    console.log(this._historial);
  }







}
