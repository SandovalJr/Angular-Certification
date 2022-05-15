import { Injectable } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class dbzService {
  private _personajes: personaje[] = [
    {
      nombre: 'Goku',
      poder: 8500,
    },
    {
      nombre: 'Vegetta',
      poder: 5000,
    },
  ];

  get personajes(): personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicio Inicializado');
  }
}
