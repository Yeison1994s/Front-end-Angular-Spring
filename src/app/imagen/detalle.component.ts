import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagenService } from '../services/imagen.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Imagen } from '../models/imagen';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() imagen:any;

  imagenes: Imagen[] = [];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor(
    private activeModal: NgbActiveModal,
    private imagenService: ImagenService
  ) { }

  ngOnInit() {

    this.config.initialSlide = this.imagen;
    this.imagenService.list().subscribe(
      data => {
        this.imagenes = data;
       // this.imagen.imagen =`http://localhost:3333/images/products/${this.imagen.imagen}`;
      },
      err => {
        console.log(err);
      }
    );
  }

}