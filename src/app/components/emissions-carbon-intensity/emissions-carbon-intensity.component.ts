import { Component, OnInit } from '@angular/core';
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
  selectedDeviceObj!: { name: any };
  carbonDataCountry?: String;
  carbonDataIndexNumber?: Number;
  carbonDataIndex?: String;
  lowCarbonDataIndex?: Boolean;
  moderateCarbonDataIndex?: Boolean;
  highCarbonDataIndex?: Boolean;
  carbonDataMix?: String[];
  chartValues?: String[];
  chartNames?: String[];

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
        this.carbonData = val;

        this.carbonDataCountry = this.carbonData.data?.[0].shortname;

        this.carbonDataIndexNumber =
          this.carbonData.data?.[0].data?.[0].intensity.forecast;

        this.carbonDataIndex =
          this.carbonData.data?.[0].data?.[0].intensity.index;

        // this.carbonDataMix = this.carbonData?.data?.[0].data?.[0].generationmix;
        // this.carbonDataMix.forEach((element: any) => {
        //   this.chartValues?.push(element.perc);
        //   this.chartNames.push(element.fuel);
        // });
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
