import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsMod
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InventaryComponent } from './inventary/inventary.component';
//import { ProductComponent } from './product/product.component';
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

