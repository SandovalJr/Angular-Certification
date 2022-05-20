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
  buscarGifts(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    // el includes es para ver si lo que estamos agregando en el elemento lo incluye
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
    }

    // para no poder agregar mas de 10
    this._historial = this._historial.splice(0, 10);

    console.log(this._historial);
  }
}
