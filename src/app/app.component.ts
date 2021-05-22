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
  constructor(private cookieService: CookieService) {
    this.logged_in = this.cookieService.get("logged_in") == "true"
    this.current_page = window.location.pathname.substring(1);
    console.log(this.current_page)
    if (this.current_page == "") this.current_page = "initial"
    window.onload = () => this.updateColorScheme()
  }
  changePage(event: string) {
    this.current_page = event;
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
    if (this.styles > themes.length) this.styles = 0
    if (this.styles < 0) this.styles = themes.length - 1
    let docStyle = document.documentElement.style;
    for (let key in themes[this.styles]) {
      if (key != "name" && key != "colorblind")
        docStyle.setProperty(key, themes[this.styles][key]);
    }
  }
}
