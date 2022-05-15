import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass'],
})
export class AgregarComponent {
  @Input() personajeRandomInput: personaje = { nombre: '', poder: 0 };
  // @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

  nuevo: personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: dbzService) {}

  agregar() {
    console.log(this.personajeRandomInput);
    // console.log(this.personajesArrayInput);

    if (this.nuevo.nombre.trim().length == 0) {
      return;
    } else {
      // output
      // this.onNuevoPersonaje.emit(this.nuevo);

      this.dbzService.agregarPersonaje(this.nuevo);

      // metemos los valores al array eb la pratica de INPUTS
      // this.personajesArrayInput.push(this.nuevo);
      // console.log(this.personajesArrayInput);

      // restablecemos los valores
      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    }
  }
}
