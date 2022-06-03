import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'M';

  ivitacionMapa = {
    F: 'invitarla',
    M: 'invitarlo',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'elias', 'juan', 'chuy', 'fatima'];
  clienetsMapa = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    '=3': 'tenemos 3 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  constructor() {}

  ngOnInit(): void {}

  borrarCliente() {
    // console.log(this.clientes);
    this.clientes.splice(0, 1);
    // console.log(this.clientes);
  }

  cambiarPersona() {
    this.nombre = 'Melissa';
    this.genero = 'F';
  }

  // KeyValue Pipe

  persona = {
    nombre: 'Elias',
    edad: 22,
    direccion: 'Ottawa, Canada',
  };

  // json pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Aqua Man',
      vuela: true,
    },
  ];

  // Async pipe

  miObsevable = interval(1000); //0,1,2,3,4,5,6,7...

  valorPromesa = new Promise((res, req) => {
    setTimeout(() => {
      res('data de promesa');
    }, 3500);
  });


}
