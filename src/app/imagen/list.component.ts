import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() imagen:any; 
  
  constructor() { }

  ngOnInit() {
    this.imagen.imagen=`http://localhost:1558/images/products/${this.imagen.imagen}`
  }

}
