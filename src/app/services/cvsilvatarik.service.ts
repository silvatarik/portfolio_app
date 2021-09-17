import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CvsilvatariktService {
  profesional: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  proyectos:any[] = [];
  blog: any[] = [];

  private URL : string= "sas";

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarExperiencia();
    this.CargarProyectos();
    // this.CargarBlog();
  }

  getQuery(query: string) {
    const url = `https://portfolio-57e5b-default-rtdb.firebaseio.com/${query}`;
    return this.http.get(url);
  }

  private CargarProfesional() {
    this.getQuery('skills.json').subscribe((resp:any[]) =>{
      this.profesional = resp;
    });
  }

  private CargarEducacion() {
    this.getQuery('educacion.json').subscribe((resp:any[]) =>{
      this.educacion = resp;
    });
  }

  private CargarExperiencia() {
    this.getQuery('experiencia.json').subscribe((resp:any[]) =>{
      this.experiencia = resp;
    });
  }

  private CargarBlog() {
    this.getQuery('blog.json').subscribe((resp:any[]) =>{
      this.blog = resp;
    });
  }

  private CargarProyectos(){
    this.getQuery('proyectos.json').subscribe((resp:any[]) =>{
      this.proyectos = resp;
      console.log(resp);
    });
  }
}
