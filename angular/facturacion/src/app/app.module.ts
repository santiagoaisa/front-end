import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineaComponent } from './component/linea/linea.component';
import { ProductoComponent } from './component/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
