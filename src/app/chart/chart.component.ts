import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input('data') public data:any;
  @Input('id') public id:any;

  ngAfterViewInit(){
    new Chart(this.id, {
      type: 'line',
      data: {
        datasets: [
          {
            data: this.data,
            borderColor: 'rgba(0, 121, 253, 0.8)',
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            backgroundColor: 'rgba(183, 216, 254, 0.3)',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        parsing: {
          xAxisKey: 'id',
          yAxisKey: 'value'
        },
        scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                
                textStrokeWidth: 1000,
              }
            }
        },
      },
    })
  }

  ngOnInit(): void {
    Chart.register(...registerables);
  }
}