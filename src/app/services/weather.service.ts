import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any>{
    let lat = 22.717743;
    let lon =  88.478187;
    let apiId = '713b46f6d6e8382350087f18c2eeb0d1';
    let queryString = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId};

    return this.http.get(queryString);

  }
  
}
