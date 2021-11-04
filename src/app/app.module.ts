import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contadores/contador/contador.component';
import { HeroeComponent } from './Heroes/heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';
//import { ContadorModule } from './contadores/contador.module';
import { ContadorModule } from './contadores/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
   

  ],
  imports: [
    BrowserModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
