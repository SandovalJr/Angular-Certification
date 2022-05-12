import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador.components/contador.component';
import { heroeComponent } from './components/heroes/heroe/heroe.component';
import { ListadoComponent } from './components/heroes/listado/listado.component';

@NgModule({
  declarations: [AppComponent, ContadorComponent, heroeComponent, ListadoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
