import { ComponentFixture, TestBed } from '@angular/core/testing';

 //Importe el módulo cliente para requerimientos http
 import { HttpClientModule } from '@angular/common/http';

 //Importe el servicio
 import { ServicioService } from '../providers/servicio.service';


import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],

              //Registre el módulo de petición http
              imports: [ HttpClientModule ],

              //Registre el servicio como proveedor de datos
              providers: [ ServicioService ]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {

    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();


    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      

      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0)

      // Que espere hasta que llegue la respuesta
      done();

    });
  });


});
