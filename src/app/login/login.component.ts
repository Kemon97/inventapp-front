import { Component,OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { count } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos:Login = new Login();

  constructor(private login:LoginService,private router: Router){}

  ngOnInit(): void {

  }

  consult(): void{
    this.login.get(this.datos.email,this.datos.password).subscribe(
      /* (response)=>{
        let variable = response.json();
        console.log(variable);
      } */
       (response)=>{
         
        console.log(response);
        if(response){
          
          this.router.navigate(['/main']);
        }else{
            Swal.fire('Error',
          'Datos incorrecto por favor verifica datos',
          'error');
          
        }

      } 
    )
  }

  pdfUrl: string = '/Docs/Política de Privacidad inventapp.pdf'

}
