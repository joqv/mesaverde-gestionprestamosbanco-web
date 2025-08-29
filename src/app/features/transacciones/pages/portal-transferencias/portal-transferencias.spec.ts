import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalTransferencias } from './portal-transferencias';

describe('PortalTransferencias', () => {
  let component: PortalTransferencias;
  let fixture: ComponentFixture<PortalTransferencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalTransferencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalTransferencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
