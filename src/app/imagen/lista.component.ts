import { Component, OnInit,Input } from '@angular/core';
import { Imagen } from '../models/imagen';
import { ImagenService } from '../services/imagen.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from './detalle.component';
import { ActivatedRoute, Router } from "@angular/router";
import { SOLID_BUTTON_TYPE_ENUM } from '../Buttons/solid-button-type.enum';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //@Input() imagenes: any; https://codingpotions.com/angular-comunicacion-componentes
  //Herencia COMPONENTE PADRE
  public $btnTypes = SOLID_BUTTON_TYPE_ENUM;
  listass: any = [];

  constructor(
    private imagenService: ImagenService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit() {
    this.getListass();
   /* this.cargarImagenes(); */  
  }

  getListass(){
    this.imagenService.getproductos().subscribe(
      listass =>{
        this.listass =listass;
      }
    )
  }

  
  onDelete = () => {
    this.imagenService.delete(this.route.snapshot.params.id).subscribe(
      product => {
        this.router.navigate(["/list"]);
      },
      err => {
      }
    );
  };

  
  borrar(id: number): void {
    this.imagenService.delete(id).subscribe(
      data => {
        this.listass;
      },
      err => {
        console.log(err);
      }
    );
  }

 abrirModal(i: number): void {
    const modalRef = this.modalService.open(DetalleComponent);
    modalRef.componentInstance.index = i;
  }

  
}


