import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=3b38f59503cff41c84fdf5ce4c3c204c&query=' + location
    );
  }
}
