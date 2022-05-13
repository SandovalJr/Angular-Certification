import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  //que componentes, pipes, etc cotiene este modulo
  declarations: [heroeComponent, ListadoComponent],
  // que cosas quiero que sean visibles afuera de el modulo
  exports: [ListadoComponent],
  //   modulos
  imports: [CommonModule],
})
export class HeroesModule {}
