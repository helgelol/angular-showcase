import { Component, OnInit } from '@angular/core';
import {
  CarbonDataModel,
  CarbonService,
} from 'src/app/services/emissions/carbon.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emissions-carbon-intensity',
  templateUrl: './emissions-carbon-intensity.component.html',
  styleUrls: ['./emissions-carbon-intensity.component.css'],
})
export class EmissionsCarbonIntensityComponent {
  selectedDeviceObj!: { name: any };

  constructor(private data: CarbonService) {}

  countryObjects = [
    { name: 'England' },
    { name: 'Wales' },
    { name: 'Scotland' },
  ];
  carbonData?: CarbonDataModel;
  // Declarations
  // selectedCountry: string = '';
  // preUrlEndpoint: string = 'https://api.carbonintensity.org.uk/regional/';
  // endpoint: string = '';
  // carbonData: any = [];
  // carbonDataIndex: string = '';
  // carbonDataIndexNumber: string = '';
  // carbonDataMix: any = [];
  // showChart: Boolean = false;
  // chartValues: any = [];
  // chartNames: any = [];
  selectedCountryObj = this.countryObjects[1];
  onChangeObj(newObj: { name: any }) {
    console.log(newObj);
    this.data.getCarbonData(newObj.name.toLowerCase()).subscribe({
      next: val => {
        this.carbonData = val;
      },
    });
  }
  // async getCarbonData() {
  //   // Resetting the chart so canvas is drawn with the new values
  //   this.showChart = false;
  //   this.chartValues = [];
  //   this.chartNames = [];
  //   this.endpoint = this.preUrlEndpoint + this.selectedCountry.toLowerCase();
  //   const getCarbonData = this.http.get(this.endpoint);
  //   this.receivedCarbonData = await this.getCarbonData();
  //   this.carbonData = this.receivedCarbonData.data[0];
  //   this.carbonDataIndex =
  //     this.receivedCarbonData.data[0].data[0].intensity.index;
  //   this.carbonDataIndexNumber =
  //     this.receivedCarbonData.data[0].data[0].intensity.forecast;
  //   this.carbonDataMix = this.receivedCarbonData.data[0].data[0].generationmix;
  //   this.carbonDataMix.forEach((element: any) => {
  //     this.chartValues.push(element.perc);
  //     this.chartNames.push(element.fuel);
  //   });
  //   // Setting this to true makes the canvas draw
  //   this.showChart = true;
  // }
}
