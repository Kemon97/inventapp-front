import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  nombre: string = 'Goku';
  edad: Number = 25;

  constructor() {};

  obtenerInfo(): string {
    return `hola soy ${this.nombre} y tengo ${this.edad} años`;
  }
}
