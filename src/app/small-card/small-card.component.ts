import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input('title') public title:string = "";
  @Input('value') public value:string = "";

  constructor() { }

  ngOnInit(): void {

  }

}
