import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Inventory {
  id: number;
  fk_Client: number;
  fk_Product: number;
  state: number;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  constructor(private http: HttpClient) { }

  newProductInventory: Inventory = { id: 0, fk_Client: 1, fk_Product: 0, state: 1 };

  postData() {
    this.http.post('/api/v1/inventory', this.newProductInventory).subscribe(response => {
      // Procesa la respuesta del servidor
      console.log(response);
    }, error => {
      // Maneja el error
      console.error(error);
    });
  }
}
