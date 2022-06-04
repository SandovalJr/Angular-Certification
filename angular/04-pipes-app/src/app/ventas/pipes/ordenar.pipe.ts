import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroesArray: Heroe[]): Heroe[] {
    console.log(heroesArray);

    heroesArray = heroesArray.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)

    return heroesArray;
  }

}
