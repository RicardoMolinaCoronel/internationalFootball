import { Component } from '@angular/core';
//Importación de la interfaz
import { Partido } from '../interfaces/partido';

//Importación del servicio
import { ServicioService } from '../providers/servicio.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private dataProvider: ServicioService) { }
  public data : Partido[] = [];
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Partido[]).slice(0,10); 
    })
  }
}
