import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit {

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id); // Imprimirá 'miDato'
    });
  }
 
}
