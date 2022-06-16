import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissions-chart-test',
  templateUrl: './emissions-chart-test.component.html',
  styleUrls: ['./emissions-chart-test.component.css'],
})
export class EmissionsChartTestComponent implements OnInit {
  public data: any;

  constructor() {
    this.data = [
      { Value: 25, Label: 'Residential' },
      { Value: 12, Label: 'Heating' },
      { Value: 11, Label: 'Lighting' },
      { Value: 18, Label: 'Other' },
      { Value: 37, Label: 'Cooling' },
    ];
  }

  ngOnInit(): void {}
}
