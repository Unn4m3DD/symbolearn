import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service"
import locale from '../../languages';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {
  locale: any;
  lang: string;
  constructor(private cookieService: CookieService) {
    this.locale = locale.footer;
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

  setLoggedOut() {
    this.cookieService.delete("logged_in")
    this.cookieService.delete("semaphore")
    window.location.reload();
  }

  ngOnInit(): void {
  }
  goToGitHub() {
    window.open("https://github.com/Unn4m3DD/symbolearn", "_blank")
  }

}
