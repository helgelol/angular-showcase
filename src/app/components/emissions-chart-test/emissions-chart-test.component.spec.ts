import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionsChartTestComponent } from './emissions-chart-test.component';

describe('EmissionsChartTestComponent', () => {
  let component: EmissionsChartTestComponent;
  let fixture: ComponentFixture<EmissionsChartTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionsChartTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionsChartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
