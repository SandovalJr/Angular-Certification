import { Component, OnInit } from '@angular/core';

interface personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent {
  nuevo: personaje = {
    nombre: '',
    poder: 0,
  };

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

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    } else {
      // metemos los valores al array
      this.personajes.push(this.nuevo);
      console.log(this.personajes);

      // restablecemos los valores
      this.nuevo = {
        nombre: '',
        poder: 0,
      };
    }
  }

  cambiarName(event: any) {
    console.log(event.target.value);
  }
}
