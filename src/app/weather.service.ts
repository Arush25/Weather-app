import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey='13b20a059ccecda078216da21742bfdf';
  constructor(private http: HttpClient ) { }

  getWeatherDataByName(city){
   return  this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric &APPID="+this.apiKey);
  }
 
}

//?q=" + city+ '&units=metric' + '&APPID=76b185c10d4bc6a73e0a51ec8c68db01'