import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass'],
})
export class PersonajesComponent {
  // estos personajes van a venir desde el componente padre
  @Input() personajesinput: personaje[] = [];

  constructor(private dbzservice: dbzService) {}

  ngOnInit(): void {}
}
