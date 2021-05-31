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
  name='';
  description='';
  imagen:File;

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
    this.imagenService.save(this.imagen,this.description,this.name).subscribe(
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

  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value = '';
  }
  
}
