import { Component,OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
      (response)=>{
        console.log(response);
        this.router.navigate(['/main'])
      }
    )
  }

  pdfUrl: string = '/Docs/Política de Privacidad inventapp.pdf'

}
