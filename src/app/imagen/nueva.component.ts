import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImagenService } from '../services/imagen.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
//import { Imagen } from '../models/imagen';

//import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {
  
  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;
  //image: File;
  imagenMin: File;
  name_mascota='';
  propietario_mascotas='';
  sexo_mascotas='';
  edad_mascotas ='';
  imagen:File;
  private id:number;

  constructor(
    private imagenService: ImagenService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }
 
  onFileChange(event) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }
 
  onCreate(): void {
    this.imagenService.save(this.imagen,this.name_mascota,this.propietario_mascotas,this.sexo_mascotas,this.edad_mascotas).subscribe(
      data => {
        this.spinner.hide();
        this.router.navigate(['/']);
      },
      err => {
        alert(err.error.mensaje);
        this.spinner.hide();
        this.reset();
      }
    );
  }
  /*
  onUpdate(): void {

  this.imagenService.update(this.id,this.imagen,this.name_mascota,this.propietario_mascotas,this.edad_mascotas,this.sexo_mascotas)
  .subscribe(
    date => {
      this.spinner.hide();
      this.router.navigate(['/']);
    }
  ); 
  }
  */
  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }
  
}
