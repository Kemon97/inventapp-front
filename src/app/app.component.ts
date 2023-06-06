import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'inventapp-front';

  openNewUserWindow() {
    window.open('/register', '_blank');
  }
}
export class LoginComponent {
  // Código del componente

  
}

export class DeleteAccount {

  private url:string="http://localhost:8080/api/v1/client/{id}";
}
