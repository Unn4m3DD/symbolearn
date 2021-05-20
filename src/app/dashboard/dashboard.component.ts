import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  small_cards_data = [{
      title: "Today",
      value: "1 hour"
    },
    {
      title: "Correct Characters",
      value: "273"
    },
    {
      title: "Incorrect Characters",
      value: "16"
    },
    {
      title: "Words",
      value: "28"
    }
  ]


  charts = [
    {
      id: "p_ot",
      title: "Precision Over Time",
      data: [
        {id: 'Dec', value: 28},
        {id: 'Jan', value: 50},
        {id: 'Fev', value: 52},
        {id: 'Mar', value: 57},
        {id: 'Abr', value: 60},
        {id: 'Mai', value: 75},
        {id: 'Jun', value: 95},
      ],
      extra: {
        title: "Current Accuracy",
        value: "85",
        improvement: "+7.00% - in 1 month"
      }
    },
    {
      id: "wpm_ot",
      data: [
        {id: 'Dec', value: 5},
        {id: 'Jan', value: 30},
        {id: 'Fev', value: 60},
        {id: 'Mar', value: 85},
        {id: 'Abr', value: 88},
        {id: 'Mai', value: 80},
        {id: 'Jun', value: 120},
      ],
      title: "WPM Over Time",
      extra: {
        title: "Current WPM",
        value: "120",
        improvement: "+25.00% - in 1 month"
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
