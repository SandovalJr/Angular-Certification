import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  valorMayusculas: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }


  changeValue() {

    this.valorMayusculas = !this.valorMayusculas
    // return (this.valorMayusculas) ? this.valorMayusculas = false : this.valorMayusculas = true
  }

}
