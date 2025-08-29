import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTransferenciaComponent } from './nueva-transferencia.component';

describe('NuevaTransferenciaComponent', () => {
  let component: NuevaTransferenciaComponent;
  let fixture: ComponentFixture<NuevaTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaTransferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
