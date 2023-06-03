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
import { ProductComponent } from '../app/product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const app_routes: Routes = [
  { path: '', redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'product', component: ProductComponent },
  { path: 'inventary', component: InventoryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component:MainComponent }

 /*  { path: '**', pathMatch: 'full', redirectTo: 'home' }*/
]; 

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

