/* import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

RouterModule

const app_routes:Routes = [
    { path: 'inventary' ,component:Component},
    { path: 'product' ,component:Component},
    { path: '**' ,pathMatch: 'full',redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes); */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ProductComponent } from '../app/product/product.component';
import { InventaryComponent } from '../app/inventary/inventary.component';

const app_routes: Routes = [
 // { path: 'product', component: ProductComponent },
  { path: 'inventary', component: InventaryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

