import { Component, OnInit, ViewChild } from '@angular/core';

import {
  CarbonDataModel,
  CarbonService,
} from 'src/app/services/emissions/carbon.service';

@Component({
  selector: 'app-emissions-carbon-intensity',
  templateUrl: './emissions-carbon-intensity.component.html',
  styleUrls: ['./emissions-carbon-intensity.component.css'],
})
export class EmissionsCarbonIntensityComponent {
  public options: any;
  carbonDataCountry?: String;
  carbonDataIndexNumber?: Number;
  carbonDataIndex?: String;
  carbonDataMix?: any = [];
  pieChartData?: any = [];

  constructor(private data: CarbonService) {}

  countryObjects = [
    { name: 'England' },
    { name: 'Scotland' },
    { name: 'Wales' },
  ];

  carbonData?: CarbonDataModel;
  selectedCountryObj = this.countryObjects[1];
  onChangeObj(newObj: { name: any }) {
    this.data.getCarbonData(newObj.name.toLowerCase()).subscribe({
      next: val => {
        this.pieChartData = [];
        this.carbonData = val;

        this.carbonDataCountry = this.carbonData.data?.[0].shortname;

        this.carbonDataIndexNumber =
          this.carbonData.data?.[0].data?.[0].intensity.forecast;

        this.carbonDataIndex =
          this.carbonData.data?.[0].data?.[0].intensity.index;

        this.carbonDataMix = this.carbonData?.data?.[0].data?.[0].generationmix;

        this.carbonDataMix.forEach((element: any) => {
          this.pieChartData.push({ label: element.fuel, value: element.perc });
        });

        this.options = {
          data: this.pieChartData,
          series: [
            {
              type: 'pie',
              angleKey: 'value',
              labelKey: 'label',
            },
          ],
        };
      },
    });
  }
}
