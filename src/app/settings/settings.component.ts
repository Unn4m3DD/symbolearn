import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  current_theme:string = "";
  attempt_duraction = 120;
  
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

  constructor() { }

  ngOnInit(): void {
    this.current_theme = this.themes[0].name
  }

  changeTheme(theme: string) {
    this.current_theme = theme
  }

  save() {
    
  }

}
