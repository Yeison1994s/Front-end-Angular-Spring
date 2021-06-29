import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Imagen } from '../models/imagen';
import { ImagenService } from '../services/imagen.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-imagen',
  templateUrl: './editar-imagen.component.html',
  styleUrls: ['./editar-imagen.component.css']
})
export class EditarImagenComponent implements OnInit {

  imagen:Imagen = null;
  name='';
  description='';
  Imagen:File;
  private id:number;

  message = '';

  constructor(
    private imagenService : ImagenService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.imagenService.detail(id).subscribe(
      data => {
        console.log(data);
        this.message ="The tutorial was updated successfully!";
        this.imagen = data;
      }
     ,
      err =>{
        /*
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        */
       console.log(err);
       this.message ="The tutorial was updated default!";

        this.router.navigate(['/']);
      }
    );
  }

onDelete(): void {
  const id = this.activatedRoute.snapshot.params.id;
    this.imagenService.delete(id).subscribe(
      data => {
        this.router.navigate(["/"]);
      },
      err => {
         console.log(err);
         this.message ="The tutorial was updated default!";
      }
    );
  };


//this.imagen,this.description,this.name
//id,this.imagen
   onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.imagenService.update(id,this.imagen).subscribe(
      data =>{
        console.log(data);
        this.imagen = data;
        this.router.navigate(['/']);

      },
      err=>{
        console.log(err);
         this.message ="The tutorial was updated default!";


      }
    )
  
  }
}
