import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/heroes/interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
// le pongo ! para que se quite el error y vea que siempre voy a enviarlo
  @Input() heroesInput!: Heroe


  constructor() { }

  ngOnInit(): void {
    // console.log(this.heroesInput);

  }

}
