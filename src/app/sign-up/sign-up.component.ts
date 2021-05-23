import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import locale from "../../languages";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  locale: any;
  lang: string;
  constructor(private cookieService: CookieService) {
    this.locale = locale.sign_up;
    switch (this.cookieService.get("config_language")) {
      case "English":
        this.lang = "en";
        break;
      case "Portuguese":
        this.lang = "pt";
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
