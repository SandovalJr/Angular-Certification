import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass'],
})
export class AgregarComponent {
  @Input() personajeRandomInput: personaje = { nombre: '', poder: 0 };
  @Input() personajesArrayInput: personaje[] = [];

  nuevo: personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    console.log(this.personajeRandomInput);
    // console.log(this.personajesArrayInput);

    if (this.nuevo.nombre.trim().length == 0) {
      return;
    } else {
      // metemos los valores al array
      this.personajesArrayInput.push(this.nuevo);
      console.log(this.personajesArrayInput);

      // restablecemos los valores
      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    }
  }
}
