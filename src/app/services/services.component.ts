import { Component, AfterViewInit } from '@angular/core';
//Importación de la interfaz
import { Partido } from '../interfaces/partido';

//Importación del servicio
import { ServicioService } from '../providers/servicio.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  dataPoints:any = [];
  chart:any;
  constructor(private dataProvider: ServicioService) { }
  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
    	text: "Goles de equipos visitantes en los primeros 23 años"
    },
    subtitles: [{
      text: "Cargando datos...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Goles"
    },
    data: [{
      type: "area",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }

  getChartInstance(chart: object) {
    this.chart = chart;
  }
  public data : Partido[] = [];

  ngAfterViewInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Partido[]).slice(0,100); 
      
      for(let i=0;i<this.data.length;i++){
        this.dataPoints.push({x: new Date(this.data[i].date), y: Number(this.data[i].away_score) });
      }
      this.chart.subtitles[0].remove();
      
    });
   
    
  }



  
}
