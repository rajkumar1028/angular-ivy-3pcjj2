import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather.service';

@Component({
  selector: 'app-weather-comp',
  templateUrl: './weather-comp.component.html',
  styleUrls: ['./weather-comp.component.css']
})
export class WeatherCompComponent implements OnInit {
lat;
lon;
weather;
  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit() {
    this.getLocation();
  }
  getLocation()
  {
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;
        
        this.weatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
          this.weather=data;
        })
      })
    }
  }

}