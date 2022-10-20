import { Component } from '@angular/core';
import { WeatherGeneral } from './models/weather-general-model';
import { HttpRestService } from './services/http-rest.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graphs';
  weather!: WeatherGeneral;

  constructor(private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.localStorage.clearData();
    this.localStorage.saveData('apiKey', 'cd5b0cdb027649cd10c586a1afbc54a3');
  }
}
