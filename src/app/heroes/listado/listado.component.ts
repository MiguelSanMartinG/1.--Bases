import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  
  heroes: string[] = ['Mario', 'Madona', 'Pikachu', 'Little Mac'];
  last:string = '';
  full:number= this.heroes.length + 1;
  borrarHeroe(){
    console.log('Borrando');
    this.last= this.heroes.pop() || 'Ya no hay heroes :\'(';
  }

}
