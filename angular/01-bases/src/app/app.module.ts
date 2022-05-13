import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { contadorModule } from './components/contador/contador.module';

// modulo contador

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, contadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
