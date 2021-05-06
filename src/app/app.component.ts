import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_page = "sign-in"
  changePage(event: string){
    this.current_page = event;
  }
}
