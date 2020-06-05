import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-app-main',
  templateUrl: './weather-app-main.component.html',
  styleUrls: ['./weather-app-main.component.css']
})
export class WeatherAppMainComponent implements OnInit {

  WeatherData:any;
  constructor(private wS: WeatherService) { }

  ngOnInit(){

    this.WeatherData={
      main:{},
      isDay:true
    }
    
  }

  getCity(city){
    console.log(city);
    this.wS.getWeatherDataByName(city).subscribe(data=>{
      this.WeatherData=data;
      this.setWeatherData(this.WeatherData);
    })
  }

  setWeatherData(data){
    console.table(data);
    this.WeatherData=data;
    let sunsetTime=new Date(this.WeatherData.sys.sunset*1000);
    this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();
    let currentDate=new Date();
    this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
    this.WeatherData.temp_celcius=(this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min=(this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max=(this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
