import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  ordenarString: string = ''

  valorMayusculas: boolean = true;

  heroes: Heroe[] = [
    {
      nombre: 'Super Man',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    }, {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Iron Man',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },

  ]



  constructor() { }

  ngOnInit(): void {
  }


  changeValue() {

    this.valorMayusculas = !this.valorMayusculas
    // return (this.valorMayusculas) ? this.valorMayusculas = false : this.valorMayusculas = true
  }


  ordenarNombres(valor: string) {
    this.ordenarString = valor
    // console.log(valor);
    
  }




}
