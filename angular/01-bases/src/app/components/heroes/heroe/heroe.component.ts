import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class heroeComponent {
  nombre: string = 'Iron Man';
  edad: number = 45;

  // Creamos un getter
  get nombreCapitzalido(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeName(): void {
    this.nombre = ' spider-man';
  }

  changeEdad(): void {
    this.edad = 25;
  }
}
