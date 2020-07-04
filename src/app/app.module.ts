import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherServiceService } from './weather.service';
import { WeatherCompComponent } from './weather-comp/weather-comp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, WeatherCompComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherServiceService]
})
export class AppModule { }
