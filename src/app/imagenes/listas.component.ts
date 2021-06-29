import { Component, Input } from '@angular/core';

@Component({
  selector: 'listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent  {
  @Input() listas: any;

  constructor() {}

  ngOnInit() {
    this.listas.imagen = `http://localhost:3333/images/products/${this.listas.imagen}`
  }
  
}
