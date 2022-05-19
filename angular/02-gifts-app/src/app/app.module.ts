import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared.module';
import { GiftsModule } from './modules/gifts.module';

// modulo

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, GiftsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
