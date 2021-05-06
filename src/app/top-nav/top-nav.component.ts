import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Output() current_page_emitter = new EventEmitter<string>();
  constructor() { 
  }
  ngOnInit(): void {
  }
  changePage(page_name: string){
    console.log(page_name)
    this.current_page_emitter.emit(page_name)
  }

}
