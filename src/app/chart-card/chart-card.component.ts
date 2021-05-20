import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {
  @Input('id') public id:any;
  @Input('title') public title:string = "";
  @Input('data') public data:any;
  @Input('extra') public extra:any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
