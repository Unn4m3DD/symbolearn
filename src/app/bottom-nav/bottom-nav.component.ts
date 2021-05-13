import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service"

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  setLoggedOut() {
    this.cookieService.set("logged_in", "false")
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
