import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from '../components/gifts/gifts-page/gifts-page.component';
import { BusquedaComponent } from '../components/gifts/busqueda/busqueda.component';
import { ResultadosComponent } from '../components/gifts/resultados/resultados.component';
@NgModule({
  declarations: [GiftsPageComponent, BusquedaComponent, ResultadosComponent],
  exports: [GiftsPageComponent],
  imports: [CommonModule],
})
export class GiftsModule {}
