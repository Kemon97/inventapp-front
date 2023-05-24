
import { Component } from '@angular/core';
//import { ProductS } from './product.component.spec';

interface Product{
  id: number;
  nombre: string;
  marca: string;
}
/*
@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  products: Product[] = [];
  newProduct: Product = {id: 0, nombre: '', marca: ''}
  productSelected: Product | null = null;

  productRegister(){
    const newID = this.products.length + 1;

    this.newProduct.id = newID;
    this.products.push(this.newProduct);

    this.newProduct = {id: 0, nombre: '', marca: ''};
  }

  selectProduct(product: Product) {
    this.productSelected = product;
  }

  modifyProduct() {
    this.productSelected = null;
  }

  clearProduct(product: Product){
    const index = this.products.findIndex(p => p.id === product.id);

    if(index !== -1){
      this.products.splice(index, 1);
    }
  }
}*/

