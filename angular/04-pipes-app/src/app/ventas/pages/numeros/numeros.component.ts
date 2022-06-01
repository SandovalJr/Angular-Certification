import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 2654858.5454;
  porcentaje: number = 0.5756;



  constructor() {}

  ngOnInit(): void {}
}
