import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class WeatherServiceService {
url="api.openweathermap.org/data/2.5/weather";
apikey="9aae6c871098fdb9b10e5e2194ae6bd6";
  constructor(private http: HttpClient) { }

getWeatherDataByCoords (lat, lon){
  let params= new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','imperial')
  .set("appid",this.apikey)
  return this.http.get(this.url,{params});
}
}