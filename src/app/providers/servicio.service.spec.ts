import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';

import { HttpClientModule } from '@angular/common/http';

  //Importe la interfaz
import { Persona } from '../interfaces/persona';

describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
              //Registre el módulo de petición http
              imports: [ HttpClientModule ],
              //Registre el servicio como proveedor de datos
              providers: [ ServicioService ]
      
    });
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    // La función done se encarga de esperar por completar el requerimiento
    it('observable_t should return value from observable', (done: DoneFn) => {
    	//Invoque el método con la petición asincrónica
      service.getResponse().subscribe(data => {
	      
        // Valide que la respuesta sea mayor que 0
        expect((data as Persona[]).length).toBeGreaterThan(0)
	      
        // Que espere hasta que llegue la respuesta 
        done();
      });
    });


});
