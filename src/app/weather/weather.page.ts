import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  public res;

  constructor(
    private weatherAPI: WeatherService
    ) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData()  {
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res);
    })
  }
}
