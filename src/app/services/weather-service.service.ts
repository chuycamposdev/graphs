import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherGeneral } from '../models/weather-general-model';
import { HttpRestService } from './http-rest.service';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private httpService: HttpRestService) {

    }

    public getWeather(): Observable<any> {
        return this.httpService.getWeather();
    }
}