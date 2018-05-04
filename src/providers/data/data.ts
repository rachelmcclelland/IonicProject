import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  GetWeatherData(): Observable<any>
  {
    return this.http.get("http://openweathermap.org/data/2.5/weather?id=2965535&appid=b6907d289e10d714a6e88b30761fae22")
      .map(obs => obs.json());
      }

}
