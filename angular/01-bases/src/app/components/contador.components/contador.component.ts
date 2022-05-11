import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h2>{{ titulo }}</h2>
    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ contador }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
    <h2>Base</h2>
    <h4>La base es: {{ base }}</h4>
  `,
})


export class ContadorComponent {
  titulo: string = 'Contador App';
  contador: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.contador += valor;
  }
}
