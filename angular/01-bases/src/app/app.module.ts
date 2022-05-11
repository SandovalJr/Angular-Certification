import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador.components/contador.component';
import { heroeComponent } from './components/heroes/heroe/heroe.component';

@NgModule({
  declarations: [AppComponent, ContadorComponent, heroeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
