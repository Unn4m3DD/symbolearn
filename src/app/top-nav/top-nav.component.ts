import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieService } from "ngx-cookie-service"
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  logged_in: boolean = false
  constructor(private cookieService: CookieService) {
    this.logged_in = cookieService.get("logged_in") == "true"
  }
  ngOnInit(): void {
  }
  changePage(page_name: string) {
    window.location.pathname = "/" + page_name
  }

}
