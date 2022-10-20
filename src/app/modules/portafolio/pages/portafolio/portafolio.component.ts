import { Component, OnInit } from '@angular/core';
import { ChartOptions } from '@shared/components/card/card.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { WeatherService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  chartAnuallyOptions: Partial<ChartOptions> | any;
  chartMonthlyOptions: Partial<ChartOptions> | any;
  chartDailyOptions: Partial<ChartOptions> | any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.printChartAnually();
    this.printChartMonthly()
    this.printChartDaily();
  }

  printChartAnually() {
    this.chartAnuallyOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 200,
        height:200,
        type: "pie"
      },
      labels: ["2022", "2023", "2024", "2025", "2026"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
  }

  printChartMonthly() {
    this.chartMonthlyOptions = {
      series: [56, 23, 23, 9, 54],
      chart: {
        width: 300,
        height:300,
        type: "pie"
      },
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
    }
  }

  printChartDaily() {
    this.chartDailyOptions = {
      series: [
        {
          name: "Comparacion",
          data: [15,5,34,23,76]
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

}
