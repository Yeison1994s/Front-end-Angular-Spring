import { Component, Input } from '@angular/core';
import { ImagenService } from '../services/imagen.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from '../imagen/detalle.component';

@Component({
  selector: 'listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent  {

  @Input() listas: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.listas.imagen = `http://localhost:3333/images/products/${this.listas.imagen}`
  }

  
}
