import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import locale from '../../languages';
import { themes } from "../global"
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  @Output() lang_changed = new EventEmitter<string>();
  current_theme: string = "";
  attempt_duration: string = "";
  settings: any;
  themes: {
    [key: string]: {
      colorblind: boolean;
      color_definitions: string[][];
    }
  };
  locale: any;
  lang: string;
  constructor(private cookieService: CookieService) {
    this.cookieService.delete("temp_dirty")
    this.themes = themes
    this.locale = locale.settings;
    switch (this.cookieService.get("config_language")) {
      case "0":
        this.lang = "pt";
        break;
      case "1":
        this.lang = "en";
        break;
      default:
        this.lang = "pt";
        this.cookieService.set("temp_config_language", "0")
        this.cookieService.set("config_language", "0")
        break;
    }
    this.updateLang()
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
  changeLang(current_lang: string) {
    this.lang = current_lang
    this.lang_changed.emit(current_lang)
    this.updateLang();
  }
  updateLang() {
    this.settings = [
      {
        config: this.locale.mode[this.lang],
        options: this.locale.mode.options[this.lang]
      },
      {
        config: this.locale.help_lvl[this.lang],
        options: this.locale.help_lvl.options[this.lang]
      },
      {
        config: this.locale.disp_style[this.lang],
        options: this.locale.disp_style.options[this.lang],
      },
      {
        config: this.locale.incl_numbers[this.lang],
        options: this.locale.incl_numbers.options[this.lang]
      },
      {
        config: this.locale.language[this.lang],
        options: this.locale.language.options[this.lang]
      },
    ]
  }

  objKeys() {
    console.log(this.lang)
    console.log(this.locale.theme.options.pt)
    if(this.lang == "pt")
      return this.locale.theme.options.pt;
    return Object.keys(this.themes)
  }

  save() {
    this.cookieService.delete("temp_dirty")
    this.cookieService.set("theme", this.current_theme)
    this.cookieService.set("attempt_duration", this.attempt_duration + "")
    for (let setting_info of this.settings) {
      let config_name = "";
      for (let setting in locale.settings)
        if (locale.settings[setting].pt == setting_info.config || locale.settings[setting].en == setting_info.config)
          config_name = locale.settings[setting].en.replace(" ", "_").toLowerCase();
      if (this.cookieService.check("temp_config_" + config_name.replace(" ", "_").toLowerCase())) {
        this.cookieService.set(
          "config_" + config_name.replace(" ", "_").toLowerCase(),
          this.cookieService.get("temp_config_" + config_name.replace(" ", "_").toLowerCase())
        )
      }
    }
  }

}
