import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarbonService {
  receivedCarbonData!: void;
  constructor(private http: HttpClient) {}
  // Declarations
  selectedCountry: string = '';
  preUrlEndpoint: string = 'https://api.carbonintensity.org.uk/regional/';
  endpoint: string = '';
  carbonData: any = [];
  carbonDataIndex: string = '';
  carbonDataIndexNumber: string = '';
  carbonDataMix: any = [];
  showChart: Boolean = false;
  chartValues: any = [];
  chartNames: any = [];

  getCarbonData(country: string): Observable<CarbonDataModel> {
    return this.http.get<CarbonDataModel>(this.preUrlEndpoint + country);
  }
}

export class CarbonDataModel {
  data?: [
    {
      shortname: String;
      data: {
        intensity: {
          forecast: Number;
          index: String;
        };
        generationmix: [
          {
            fuel: String;
            perc: Number;
          }
        ];
      };
    }
  ];
}
