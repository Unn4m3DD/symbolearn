import { Component, HostListener } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  styles = 0
  current_page = "learn"
  logged_in: boolean = false
  constructor(private cookieService: CookieService) {
    this.logged_in = this.cookieService.get("logged_in") == "true"
    this.current_page = window.location.pathname.substring(1);
    console.log(this.current_page)
    if (this.current_page == "") this.current_page = "initial"
  }
  changePage(event: string) {
    this.current_page = event;
  }

  themes: { [key: string]: string }[] = [
    {
      "--main-text-color": "#FFF",
      "--main-bg-color": "#66ACA8",
      "--primary-button-color": "#CA9100",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#FFF",
      "--secondary-button-color": "#172A3A",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#FFF",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#FFF",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#fff",
      "--logo-grad-stop": "#5AD4EF",
      "--linear-gradient-start": "#528986",
      "--linear-gradient-stop": "#61A6A1",
      "--top-tab-text": "#fff",
      "--bubbles-color": "#cf95031c"
    },
    {
      "--main-text-color": "#000",
      "--main-bg-color": "#e4f7ff",
      "--primary-button-color": "#cc9600",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#FFF",
      "--secondary-button-color": "#172A3A",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#FFF",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#FFF",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#b6e4ee",
      "--linear-gradient-start": "#7fd6d0",
      "--linear-gradient-stop": "#6dbdff",
      "--top-tab-text": "#333",
      "--bubbles-color": "#cf95031c"
    },
  ]

  @HostListener('document:keypress', ['$event'])
  onPress(e: KeyboardEvent) {
    if (e.key == "a")
      this.styles++
    else if (e.key == "d")
      this.styles--
    if (this.styles > 3) this.styles = 0
    if (this.styles < 0) this.styles = 3
    let docStyle = document.documentElement.style;
    for (let key in this.themes[this.styles]) {
      docStyle.setProperty(key, this.themes[this.styles][key]);
    }
    document.body.style.zIndex = "1";

  }
}
