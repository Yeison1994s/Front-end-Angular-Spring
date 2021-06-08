import { Component, OnInit,Input } from '@angular/core';
import { Imagen } from '../models/imagen';
import { ImagenService } from '../services/imagen.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from './detalle.component';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //@Input() imagenes: any; https://codingpotions.com/angular-comunicacion-componentes
  //Herencia COMPONENTE PADRE
  //imagenes: Imagen[] = [];
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
        this.getListass();
      },
      err => {
        console.log(err);
      }
    );
  }
  /*
  cargarImagenes(): void {
    this.imagenService.list().subscribe(
      data => {
        this.imagenes = data;
      }
    );
  }
  borrar(id: number): void {
    this.spinner.show();
    this.imagenService.delete(id).subscribe(
      data => {
        this.spinner.hide();
        this.cargarImagenes();
      },
      err => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }
  */
}


