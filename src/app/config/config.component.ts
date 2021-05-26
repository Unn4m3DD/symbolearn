import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import locale from "../../languages";
let lang_selected: string = "";
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @Output() config_changed = new EventEmitter<string>();
  @Output() dirtyChange = new EventEmitter<undefined>();
  @Input('setting') public setting: any;
  public selected: string = "";

  constructor(private cookieService: CookieService) {
  }

  changeSelected(selected: string) {
    this.dirtyChange.emit();
    let config_name = "";
    let sel_id = "";
    for (let setting in locale.settings) {
      if (locale.settings[setting].pt == this.setting.config) {
        config_name = locale.settings[setting].en.replace(" ", "_").toLowerCase();
        for (let option in locale.settings[setting].options.pt)
          if (selected == locale.settings[setting].options.pt[option]) {
            this.selected = locale.settings[setting].options.en[option].replace(" ", "_").toLowerCase();
            sel_id = option;
          }
      }
      else if (locale.settings[setting].en == this.setting.config) {
        config_name = locale.settings[setting].en.replace(" ", "_").toLowerCase();
        for (let option in locale.settings[setting].options.en)
          if (selected == locale.settings[setting].options.en[option]) {
            this.selected = locale.settings[setting].options.en[option].replace(" ", "_").toLowerCase();
            sel_id = option;
          }
      }
    }
    this.cookieService.set("temp_config_" + config_name, sel_id) //  selected.replace(" ", "_").toLowerCase()
    this.cookieService.set("temp_dirty", "true")
    this.selected = selected
    if (this.setting.config == "Language" || this.setting.config == "Idioma") {
      if (selected == "Portuguese") {
        this.config_changed.emit("pt");
        lang_selected = "Português"
      }
      if (selected == "Inglês") {
        this.config_changed.emit("en");
        lang_selected = "English"
      }
    }
  }

  ngOnInit(): void {
    let config_name = "";
    let sel_id = ""
    for (let setting in locale.settings)
      if (locale.settings[setting].pt == this.setting.config) {
        config_name = locale.settings[setting].en.replace(" ", "_").toLowerCase();
        sel_id = this.cookieService.get("config_" + config_name) || "0";
      }
      else if (locale.settings[setting].en == this.setting.config) {
        config_name = locale.settings[setting].en.replace(" ", "_").toLowerCase();
        sel_id = this.cookieService.get("config_" + config_name) || "0";
      }
    if (sel_id != "") {
      this.selected = this.setting.options[sel_id];
      this.cookieService.set("temp_config_" + config_name, sel_id)
    }
    else {
      this.selected = this.setting.options[0]
      this.cookieService.set("temp_config_" + config_name, "0")
    }
    if (this.setting.config == "Language" || this.setting.config == "Idioma") {
      if (lang_selected != "") {
        this.selected = lang_selected
        if (lang_selected == "Português")
          this.cookieService.set("temp_config_language", "0")

        if (lang_selected == "English")
          this.cookieService.set("temp_config_language", "1")
      }
    }
  }
}
