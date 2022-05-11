import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public titulo: string = 'Contador App';
  public contador: number = 0;

  acumular(valor: number) {
    this.contador += valor;
  }
  // sumar() {
  //   this.contador += 1;
  // }

  // restar() {
  //   this.contador -= 1;
  // }
}
