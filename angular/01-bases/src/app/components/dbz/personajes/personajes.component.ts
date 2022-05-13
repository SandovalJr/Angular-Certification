import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass'],
})
export class PersonajesComponent {
  // estos personajes van a venir desde el componente padre
  @Input() personajesinput: personaje[] = [];

  constructor() {}

  ngOnInit(): void {}
}
