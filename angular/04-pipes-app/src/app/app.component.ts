import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private primeNgConfig: PrimeNGConfig) {}
  ngOnInit() {
    // efecto ripple 
    this.primeNgConfig.ripple = true;
  }

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
