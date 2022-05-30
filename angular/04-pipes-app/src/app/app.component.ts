import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'elias sandoVal';
  valor: number = 2000;
  obj = {
    name: 'sandoval',
    edad: 15,
  };
  mostrarName() {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
