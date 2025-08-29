import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenTransferenciaComponent } from './resumen-transferencia.component';

describe('ResumenTransferenciaComponent', () => {
  let component: ResumenTransferenciaComponent;
  let fixture: ComponentFixture<ResumenTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenTransferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
