import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  constructor() { 
  }
  ngOnInit(): void {
  }
  changePage(page_name: string){
    window.location.pathname = "/" + page_name
  }

}
