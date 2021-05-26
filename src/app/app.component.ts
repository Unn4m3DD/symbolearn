import { Component, HostListener } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { themes } from "./global"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  styles = 0
  current_page = "learn"
  logged_in: boolean = false
  lang: string;
  constructor(private cookieService: CookieService) {
    this.logged_in = this.cookieService.get("logged_in") == "true"
    this.current_page = window.location.pathname.substring(1);
    console.log(this.current_page)
    if (this.current_page == "") this.current_page = "initial"
    window.onload = () => this.updateColorScheme()
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
    if (this.cookieService.get("config_help_level") == "") {
      this.cookieService.set("config_help_level", "2")
    }
  }
  changePage(event: string) {
    this.current_page = event;
  }
  changeLanguage(language: string) {
    this.lang = language
  }


  @HostListener('document:keypress', ['$event'])
  onPress(e: KeyboardEvent) {
    if (e.key == "d")
      this.styles++
    else if (e.key == "a")
      this.styles--
    this.updateColorScheme();
  }
  updateColorScheme() {
    let theme = this.cookieService.get("theme")
    console.log(theme)
    if (theme == "") theme = "Default"
    let docStyle = document.documentElement.style;

    for (let key in themes[theme].color_definitions) {
      docStyle.setProperty(themes[theme].color_definitions[key][0], themes[theme].color_definitions[key][1]);
    }
  }
}
