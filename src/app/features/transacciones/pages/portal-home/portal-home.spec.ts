import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalHome } from './portal-home';

describe('PortalHome', () => {
  let component: PortalHome;
  let fixture: ComponentFixture<PortalHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
