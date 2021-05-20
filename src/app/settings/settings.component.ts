import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings = [
    {
      config: "Attempt Duration",
      options: ["60s", "120s", "240s"]
    },
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
  }

}
