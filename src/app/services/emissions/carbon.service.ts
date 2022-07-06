import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarbonService {
  receivedCarbonData!: void;
  constructor(private http: HttpClient) {}

  preUrlEndpoint: string = 'https://api.carbonintensity.org.uk/regional/';

  getCarbonData(country: string): Observable<CarbonDataModel> {
    return this.http.get<CarbonDataModel>(this.preUrlEndpoint + country);
  }
}

export class CarbonDataModel {
  data?: [
    {
      shortname: String;
      data?: [
        {
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
        }
      ];
    }
  ];
}
