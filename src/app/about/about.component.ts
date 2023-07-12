import { Component } from '@angular/core';
//Importación de la interfaz
import { Persona } from '../interfaces/persona';

//Importación del servicio
import { ServicioService } from '../providers/servicio.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private dataProvider: ServicioService) { }
  public data : Persona[] = [];
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Persona[]).slice(0,10); 
    })
  }
}
