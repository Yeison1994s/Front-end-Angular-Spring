import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  //imagenURL = 'http://localhost:2222/products/';
 imagenURL = environment.imagenURL;
 
 constructor(private httpClient: HttpClient) { }

  public list(): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(this.imagenURL + 'list');
  }
  public save(imagen: File,name:string,description:string): Observable<any> {
    const formData = new FormData();
    //formData.append('multipartFile', imagen);
    formData.append('imagen', imagen);
    formData.append('name',name);
    formData.append('description',description);
    return this.httpClient.post<any>(this.imagenURL + 'upload', formData);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.imagenURL + `${id}`);
  }

  public getproductos(){
    return this.httpClient.get<any>(this.imagenURL + 'get');
  } 
  
  public getProductById(id:number): Observable<any>{
    return this.httpClient.get<any>(this.imagenURL+ `${id}/id`);
  }
/*
  public update(name:string,description:string): Observable<any>{
    return this.httpClient.put<any>(this.imagenURL + `${'id'}/details`,{name,description});
  }
  /{id}/details
  */
 /*
 public update(id: number, imagen: Imagen): Observable<any> {
    return this.httpClient.put<any>(this.imagenURL + `${id}/details`, imagen);
  }
  */
  public detail(id: number): Observable<Imagen> {
    return this.httpClient.get<Imagen>(this.imagenURL + `${id}`);
  }

  public update(id:number, imagen: Imagen): Observable<any>{
    return this.httpClient.put<any>(this.imagenURL + `${id}/update`, imagen);
    }

}
