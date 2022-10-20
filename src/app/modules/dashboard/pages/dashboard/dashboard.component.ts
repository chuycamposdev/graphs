import { Component, OnInit } from '@angular/core';
import { ChartOptions } from '@shared/components/card/card.component';
import { WeatherGeneral } from 'src/app/models/weather-general-model';
import { WeaterMain } from 'src/app/models/weather-main-model';
import { WeatherService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartOptions: Partial<ChartOptions> | any;
  chartBarOptions!: Partial<ChartOptions> | any;


  dataBarTodayWeather: Array<any> = [];
  dataBarYestardayWeather: Array<any> = [];

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.consumeWeatherAPI();
  }

  consumeWeatherAPI() {
    this.weatherService.getWeather().subscribe(data => {
      let weaterTodayMain: WeatherGeneral = data.list[0];
      let weaterYesterdayMain: WeatherGeneral = data.list[1];
      //temperatura hoy
      this.dataBarTodayWeather.push(weaterTodayMain.main.feels_like);
      this.dataBarTodayWeather.push(weaterTodayMain.main.temp);
      this.dataBarTodayWeather.push(weaterTodayMain.main.temp_min);
      this.dataBarTodayWeather.push(weaterTodayMain.main.temp_max);
      this.dataBarTodayWeather.push(weaterTodayMain.main.pressure);

      //temperatura ayer
      this.dataBarYestardayWeather.push(weaterYesterdayMain.main.feels_like);
      this.dataBarYestardayWeather.push(weaterYesterdayMain.main.temp);
      this.dataBarYestardayWeather.push(weaterYesterdayMain.main.temp_min);
      this.dataBarYestardayWeather.push(weaterYesterdayMain.main.temp_max);
      this.dataBarYestardayWeather.push(weaterYesterdayMain.main.pressure);

      this.printLineChart();
      this.printBarChar();
    });
  }

  printLineChart() {
    this.chartOptions = {
      series: [
        {
          name: "Comparacion",
          data: this.dataBarTodayWeather
        }
      ],
      chart: {
        height: 500,
        width: 400,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      title: {
        text: "Temperatura de hoy",
        align: "left"
      },
      xaxis: {
        categories: [
          "Feels Like",
          "Temp",
          "Temp Min",
          "Temp Max",
          "Pressure"
        ]
      }
    };
  }

  printBarChar(){
    this.chartBarOptions = {
      series: [
        {
          name: "Hoy",
          data: this.dataBarTodayWeather
        },
        {
          name: "Ayer",
          data: this.dataBarYestardayWeather
        }
      ],
      chart: {
        type: "bar",
        height: 500,
        width:400
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feels Like",
          "Temp",
          "Temp Min",
          "Temp Max",
          "Pressure"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

}
