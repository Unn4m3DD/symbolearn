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
      "--bubbles-color": "#cf95031c",
      "--bubbles-color-secondary": "#cf95031c",
      "--form-text-color": "#fff"
    }, {

      "--main-text-color": "#000",
      "--main-bg-color": "#ffffff",
      "--primary-button-color": "#dc91cc",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#FFF",
      "--secondary-button-color": "#64536f",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#FFF",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#FFF",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#b6e4ee",
      "--linear-gradient-start": "#d2fbfb",
      "--linear-gradient-stop": "#57b1ff",
      "--top-tab-text": "#333",
      "--bubbles-color": "#f9a0ff4f",
      "--bubbles-color-secondary": "#57b1ff2b",
      "--form-text-color": "#fff",

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
      "--bubbles-color": "#cf95031c",
      "--bubbles-color-secondary": "#cf95031c",
      "--form-text-color": "#fff"
    },
    {
      "--main-text-color": "#000",
      "--main-bg-color": "#e8c9af",
      "--primary-button-color": "#f4b24e",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#fff",
      "--secondary-button-color": "#424140",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#fff",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#fff",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#f06f6f",
      "--linear-gradient-start": "#d94e4e",
      "--linear-gradient-stop": "#d84040",
      "--top-tab-text": "#333",
      "--bubbles-color": "rgb(244 178 78 / 46%)",
      "--bubbles-color-secondary": "rgb(216 74 73 / 51%)",
      "--form-text-color": "#fff"
    },
    {
      "--main-text-color": "#000",
      "--main-bg-color": "#ffffff",
      "--primary-button-color": "#6de1e6",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#fff",
      "--secondary-button-color": "#369669",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#fff",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#fff",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#6ff0e4",
      "--linear-gradient-start": "#a3ff91",
      "--linear-gradient-stop": "#72bb72",
      "--top-tab-text": "#333",
      "--bubbles-color": "rgb(63 255 202 / 30%)",
      "--bubbles-color-secondary": "rgb(167 255 166 / 51%)",
      "--form-text-color": "#fff"
    },
    {
      "--main-text-color": "#000",
      "--main-bg-color": "#ffffff",
      "--primary-button-color": "#e0e86a",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#fff",
      "--secondary-button-color": "#565656",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#fff",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#fff",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#6ff0e4",
      "--linear-gradient-start": "#8bf0c8",
      "--linear-gradient-stop": "#89eecd",
      "--top-tab-text": "#333",
      "--bubbles-color": "rgb(255 248 34 / 30%)",
      "--bubbles-color-secondary": "rgb(164 238 117 / 32%)",
      "--form-text-color": "#fff"
    },
    {
      "--main-text-color": "#000",
      "--main-bg-color": "#ffffff",
      "--primary-button-color": "#f4cf49",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#fff",
      "--secondary-button-color": "#484848",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#fff",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#fff",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#ff9ca6",
      "--linear-gradient-start": "#ffbdc0",
      "--linear-gradient-stop": "#e87b87",
      "--top-tab-text": "#333",
      "--bubbles-color": "rgb(255 248 34 / 30%)",
      "--bubbles-color-secondary": "rgb(228 145 145 / 32%)",
      "--form-text-color": "#fff"
    },
    {
      "--main-text-color": "#000",
      "--main-bg-color": "#f2c0c0",
      "--primary-button-color": "#ff5b5b",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#fff",
      "--secondary-button-color": "#484848",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#fff",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#fff",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#9ce4ff",
      "--linear-gradient-start": "#c1c7d4",
      "--linear-gradient-stop": "#7e8d90",
      "--top-tab-text": "#333",
      "--bubbles-color": "rgb(34 214 255 / 30%)",
      "--bubbles-color-secondary": "rgb(255 32 32 / 19%)",
      "--form-text-color": "#fff"
    },
    {
      "--main-text-color": "#000",
      "--main-bg-color": "#ead0a1",
      "--primary-button-color": "#ffbe29",
      "--primary-button-color-hover": "#c08a00",
      "--primary-button-color-active": "#d69b04",
      "--primary-button-text-color": "#fff",
      "--secondary-button-color": "#885843",
      "--secondary-button-color-hover": "#080f14",
      "--secondary-button-color-active": "#162835",
      "--secondary-button-text-color": "#fff",
      "--dropdown-color": "#f9f9f9",
      "--morse-input-color": "#fff",
      "--morse-input-text-color": "#000",
      "--logo-grad-start": "#000",
      "--logo-grad-stop": "#ffb100",
      "--linear-gradient-start": "#ffb50b",
      "--linear-gradient-stop": "#f48715",
      "--top-tab-text": "#333",
      "--bubbles-color": "rgb(203 125 88 / 29%)",
      "--bubbles-color-secondary": "rgb(244 147 0 / 34%)",
      "--form-text-color": "#fff"
    }
  ]

  @HostListener('document:keypress', ['$event'])
  onPress(e: KeyboardEvent) {
    if (e.key == "d")
      this.styles++
    else if (e.key == "a")
      this.styles--
    if (this.styles > this.themes.length) this.styles = 0
    if (this.styles < 0) this.styles = this.themes.length - 1
    let docStyle = document.documentElement.style;
    for (let key in this.themes[this.styles]) {
      docStyle.setProperty(key, this.themes[this.styles][key]);
    }

    console.log(this.styles)
  }
}
