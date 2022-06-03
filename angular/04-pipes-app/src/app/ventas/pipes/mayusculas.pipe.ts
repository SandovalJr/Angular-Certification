import { Pipe, PipeTransform } from '@angular/core';

// decorador
@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {

  transform(valor: string, enMayusculas: boolean = true): string {
    // console.log(valor)
    // if (enMayusculas) {
    //   return valor.toUpperCase();
    // } else {
    //   return valor.toLowerCase()
    // }

    return (enMayusculas) ? valor.toLocaleUpperCase() : valor.toLocaleLowerCase()

    
  }


}