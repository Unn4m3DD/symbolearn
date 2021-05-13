import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private cookieService: CookieService) {
  }

  setLoggedIn() {
    this.cookieService.set("logged_in", "true")
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
