import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather.service';

@Component({
  selector: 'app-worldweather',
  templateUrl: './worldweather.component.html',
  styleUrls: ['./worldweather.component.css']
})
export class WorldweatherComponent implements OnInit {
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