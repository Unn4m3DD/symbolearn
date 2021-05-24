import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import locale from "../../languages"
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  locale: any;
  lang: string;
  constructor(private cookieService: CookieService) {
    this.locale = locale.sign_in;
    switch (this.cookieService.get("config_language")) {
      case "0":
        this.lang = "pt";
        break;
      case "1":
        this.lang = "en";
        break;
      default:
        this.lang = "pt";
        break;
    }
  }

  setLoggedIn() {
    this.cookieService.set("logged_in", "true")
    window.location = <any>("/dashboard")
  }

  ngOnInit(): void {
  }

}
