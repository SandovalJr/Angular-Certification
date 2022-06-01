import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'elias sandoval';
  nombreUpper: string = 'ELIAS';
  nombreCompleto: string = 'eLiAs SaNdOvAl';

  fecha: Date = new Date(); // dia de hoy

  
}
