import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_page = "learn-morse"
  changePage(event: string){
    console.log(event)
    this.current_page = event;
  }
}
