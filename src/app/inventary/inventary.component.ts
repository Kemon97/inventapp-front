
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Inventary{
  id: number;
  fk_Client: number;
  fk_Product:number;
  state:number;
}


@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.css']
})

export class InventaryComponent {
  constructor(private http: HttpClient) { }
  inventary: Inventary[] = [];
  newProductInventary: Inventary = {id: 0, fk_Client: 1, fk_Product:0,state:1}
  productInventarySelected: Inventary | null = null;
  
  postData() {
    const data = { /* Datos a enviar en el cuerpo de la solicitud */ };
  
    this.http.post('/api/endpoint', data).subscribe(response => {
      // Procesa la respuesta del servidor
      console.log(response);
    }, error => {
      // Maneja el error
      console.error(error);
    });
  }

/*
  inventaryRegister(){
    const newID = this.Inventary.length + 1;

    this.newProductInventary.id = newID;
    this.productInventarySelected.push(this.productInventarySelected);

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
  }*/
}

