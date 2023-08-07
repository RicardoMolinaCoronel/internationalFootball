import { Component } from '@angular/core';
import { Partido } from '../app/interfaces/partido';
import { ServicioService } from '../app/providers/servicio.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internationalFootball';
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
