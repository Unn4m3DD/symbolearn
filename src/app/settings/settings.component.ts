import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { config } from 'rxjs';
import { themes } from "../global"
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  current_theme: string = "";
  attempt_duration: string = "";

  settings = [
    {
      config: "Mode",
      options: ["Scrambled Letters", "Words", "Phrases"]
    },
    {
      config: "Help Level",
      options: ["Character Over Symbol", "Cheat Sheet", "No Help"]
    },
    {
      config: "Display Style",
      options: ["Words", "Inline", "Show Current character"]
    },
    {
      config: "Include Numbers",
      options: ["Yes", "No"]
    },
    {
      config: "Language",
      options: ["English", "Portuguese"]
    },
  ]
  themes: {
    [key: string]: {
      colorblind: boolean;
      color_definitions: string[][];
    }
  };
  constructor(private cookieService: CookieService) {
    this.themes = themes

  }
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    if (this.cookieService.get("temp_dirty") != "")
      event.returnValue = <any>"You have not applied the change to website configuration\nAre you sure you want to quit?"
  }

  ngOnInit(): void {
    this.current_theme = this.cookieService.get("theme") || "Default"
    if (!this.cookieService.check("attempt_duration")) this.attempt_duration = "120";
    else this.attempt_duration = this.cookieService.get("attempt_duration")
  }

  changeTheme(theme: string) {
    this.cookieService.set("temp_dirty", "true")
    this.current_theme = theme
    let docStyle = document.documentElement.style;

    for (let key in themes[theme].color_definitions) {
      docStyle.setProperty(themes[theme].color_definitions[key][0], themes[theme].color_definitions[key][1]);
    }
  }

  objKeys() {
    return Object.keys(this.themes)
  }

  save() {
    this.cookieService.delete("temp_dirty")
    this.cookieService.set("theme", this.current_theme)
    this.cookieService.set("attempt_duration", this.attempt_duration + "")
    for (let setting of this.settings) {
      if (this.cookieService.check("temp_config_" + setting.config.replace(" ", "_").toLowerCase())) {
        this.cookieService.set("config_" + setting.config.replace(" ", "_").toLowerCase(), this.cookieService.get("temp_config_" + setting.config.replace(" ", "_").toLowerCase()))
      }
    }
  }

}
