import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroesArray: Heroe[], orderPor: string = "sin valor"): Heroe[] {
    // console.log(orderPor);


    switch (orderPor) {
      case 'nombre':
        return heroesArray = heroesArray.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
      case 'vuela':
        return heroesArray = heroesArray.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1)
      case 'color':
        return heroesArray = heroesArray.sort((a, b) => (a.color > b.color) ? 1 : -1)

      default:
        return heroesArray;
    }



  }

}
