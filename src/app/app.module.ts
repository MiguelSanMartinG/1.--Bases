import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeComponent } from './Heroe/app.component';
import { ListadoComponent } from './listado/listado/listado.component';

import { AppComponent } from './modulo/app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
