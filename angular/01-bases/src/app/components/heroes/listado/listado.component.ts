import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass'],
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Hulk', 'Thor', 'spidermam', 'iron man'];
  heroborrado: string = '';

  constructor() {}

  ngOnInit(): void {}

  BorrarHero() {
    // this.heroes.splice(2, 1);
    this.heroborrado = this.heroes.shift() || '';
    console.log(this.heroborrado);
    // console.log(this.heroes);
  }
}
