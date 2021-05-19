import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_page = "learn"
  logged_in: boolean = false
  constructor(private cookieService : CookieService) {
    this.logged_in = this.cookieService.get("logged_in") == "true"
    this.current_page = window.location.pathname.substring(1);
    console.log(this.current_page)
    if (this.current_page == "") this.current_page = "initial"
  }
  changePage(event: string) {
    this.current_page = event;
  }
}
