import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRestService {
  latitud: string = '18.5216';
  longitud: string = '-88.2867';
  apiKey!: string | null;
  baseUrl = ``;

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {
    this.apiKey = this.localStorage.getData('apiKey');
    this.baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitud}&lon=${this.longitud}&appid=${this.apiKey}`;
  }

  public getWeather(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}