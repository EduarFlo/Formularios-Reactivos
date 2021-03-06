import { OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  actividad = new FormControl();

  lista: string[] = [];

  ngOnInit(): void {
    this.lista=[];
    let arreglo = JSON.parse(localStorage.getItem('actividades') || '{}');
    if (arreglo!=null)
      for(let actividad of arreglo)
        this.lista.push(actividad);
  }

  agregar() {
    this.lista.push(this.actividad.value);    
    localStorage.setItem('actividades', JSON.stringify(this.lista));
    this.actividad.setValue('');
  }

  borrar(pos:number) {
    this.lista.splice(pos,1);
    localStorage.clear();
    localStorage.setItem('actividades', JSON.stringify(this.lista));
  }

  borrarTodas() {
    localStorage.clear();
    this.lista=[];
  }
}
