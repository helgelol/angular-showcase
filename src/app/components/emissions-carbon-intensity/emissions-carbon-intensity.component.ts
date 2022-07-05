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
  selectedDeviceObj!: { name: any };
  carbonDataCountry?: String;
  carbonDataIndexNumber?: Number;
  carbonDataIndex?: String;
  carbonDataMix?: any;
  chartValues?: any = [];
  chartNames?: any = [];
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
              colors: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(212, 40, 55, 0.5)',
                'rgba(246, 108, 75, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(0, 130, 68, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(130, 90, 50, 0.5)',
              ],
            },
          ],
        };
      },
    });
  }

  //   this.showChart = false;
  //   this.chartValues = [];
  //   this.chartNames = [];

  //   this.carbonDataMix = this.receivedCarbonData.data[0].data[0].generationmix;

  //   this.carbonDataMix.forEach((element: any) => {
  //     this.chartValues.push(element.perc);
  //     this.chartNames.push(element.fuel);
  //   });

  //   // Setting this to true makes the canvas draw
  //   this.showChart = true;
}
