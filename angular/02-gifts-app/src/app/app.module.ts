import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared.module';
import { GiftsModule } from './modules/gifts.module';

// modulo

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, GiftsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
