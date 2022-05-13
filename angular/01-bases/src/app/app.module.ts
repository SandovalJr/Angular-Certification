import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { contadorModule } from './components/contador/contador.module';
import { DbzModule } from './components/dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, contadorModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
