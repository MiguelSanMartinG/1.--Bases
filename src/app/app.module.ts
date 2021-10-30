import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeComponent } from './Heroe/app.component';

import { AppComponent } from './modulo/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
