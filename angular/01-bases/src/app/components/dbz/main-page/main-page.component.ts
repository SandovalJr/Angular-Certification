import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent {
  personajeRandomPapa: personaje = {
    nombre: 'elias',
    poder: 21568,
  };

  constructor(private dbzservice: dbzService) {}

  // get personajes(): personaje[] {
  //   return this.dbzservice.personajes;
  // }

  // agregarnuevoPersonaje(argumento: personaje) {
  //   // console.log(argumento);
  //   // debugger
  //   // this.personajes.push(argumento);
  //   // console.log(this.personajes);
  // }

  // cambiarName(event: any) {
  //   console.log(event.target.value);
  // }
}
