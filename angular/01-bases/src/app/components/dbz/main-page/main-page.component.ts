import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent {
  personajes: personaje[] = [
    {
      nombre: 'Goku',
      poder: 8500,
    },
    {
      nombre: 'Vegetta',
      poder: 5000,
    },
  ];

  personajeRandomPapa: personaje = {
    nombre: 'elias',
    poder: 21568,
  };

  cambiarName(event: any) {
    console.log(event.target.value);
  }

  agregarnuevoPersonaje(argumento: personaje) {
    // console.log(argumento);
    // debugger
    this.personajes.push(argumento);
    // console.log(this.personajes);
  }

  constructor(private dbzservice: dbzService) {}
  
}
