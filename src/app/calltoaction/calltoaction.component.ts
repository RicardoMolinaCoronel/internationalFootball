import { Component } from '@angular/core';
//Importación de la interfaz
import { Partido } from '../interfaces/partido';

//Importación del servicio
import { ServicioService } from '../providers/servicio.service';
@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent {
  public randomdata: Partido | null = null; // Inicializar como null o un objeto Partido

  constructor(private dataProvider: ServicioService) { }

  ngOnInit() {
    this.generarPartidoAleatorio(); // Generar un partido aleatorio al cargar la página
  }

  generarPartidoAleatorio() {
    this.dataProvider.getResponse().subscribe((response) => { 
      const partidos: Partido[] = response as Partido[]; 
      const indiceAleatorio = Math.floor(Math.random() * partidos.length);
      this.randomdata = partidos[indiceAleatorio];
    });
  }
}
