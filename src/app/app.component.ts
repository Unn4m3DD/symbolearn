import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_page = "learn-morse"
  constructor() {
    this.current_page = window.location.pathname.substring(1)
    if (this.current_page == "") this.current_page = "initial"
  }
  changePage(event: string) {
    this.current_page = event;
  }
}
