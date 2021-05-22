import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  current_theme:string = "";
  attempt_duration:string = "";
  
  themes = [
    {
      name:"Default",
      color_blind_friendly: true
    },
    {
      name:"High Contrast",
      color_blind_friendly: true
    },
    {
      name:"Light",
      color_blind_friendly: true
    },
    {
      name:"Dark",
      color_blind_friendly: true
    },
    {
      name:"Monokai",
      color_blind_friendly: false
    },
    {
      name:"Abyss",
      color_blind_friendly: false
    }
  ]

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

  constructor(private cookieService: CookieService) {    
  }

  ngOnInit(): void {
    this.current_theme = this.themes[0].name
    if(!this.cookieService.check("attempt_duration")) this.attempt_duration = "120";
    else this.attempt_duration = this.cookieService.get("attempt_duration")
  }

  changeTheme(theme: string) {
    this.current_theme = theme
  }

  save() {
    this.cookieService.set("theme", this.current_theme)
    this.cookieService.set("attempt_duration", this.attempt_duration+"")
    for (let setting of this.settings) {
      if(this.cookieService.check("temp_config_"+setting.config.replace(" ", "_").toLowerCase())) {
        this.cookieService.set("config_"+setting.config.replace(" ", "_").toLowerCase(), this.cookieService.get("temp_config_"+setting.config.replace(" ", "_").toLowerCase()))
      }
    }
  }

}
