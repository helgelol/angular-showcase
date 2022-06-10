import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionsCarbonIntensityComponent } from './emissions-carbon-intensity.component';

describe('EmissionsCarbonIntensityComponent', () => {
  let component: EmissionsCarbonIntensityComponent;
  let fixture: ComponentFixture<EmissionsCarbonIntensityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionsCarbonIntensityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionsCarbonIntensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
