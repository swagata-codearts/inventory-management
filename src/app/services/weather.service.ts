import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any>{
    // let lat = 22.717743;
    // let lon =  88.478187;

    let apiId = '11b74bd067504f82a42172040221606';
    let queryString = 'http://api.weatherapi.com/v1/forecast.json?key='+ apiId +'&q='+ 'Kolkata'+'&days=1&aqi=no&alerts=no';

    return this.http.get(queryString);

  }
}
  

