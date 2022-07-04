import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPageRoutingModule } from './weather-routing.module';

import { WeatherPage } from './weather.page';
import { FooterComponent } from '../components/footer/footer.component';

import { DayPipe } from '../pipes/day.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPageRoutingModule
  ],
  declarations: [
    WeatherPage,
    FooterComponent,
    DayPipe
  ]
})
export class WeatherPageModule {}
