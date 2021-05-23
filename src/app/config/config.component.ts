import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @Input('setting') public setting: any;
  public selected: string = "";

  constructor(private cookieService: CookieService) {
    this.cookieService.delete("temp_dirty")
  }

  changeSelected(selected: string) {
    this.selected = selected
    this.cookieService.set("temp_config_" + this.setting.config.replace(" ", "_").toLowerCase(), selected) //  selected.replace(" ", "_").toLowerCase()
    this.cookieService.set("temp_dirty", "true")
  }

  ngOnInit(): void {
    this.selected = this.cookieService.get("config_" + this.setting.config.replace(" ", "_").toLowerCase())
    if (this.selected == "" || !this.setting.options.includes(this.selected)) {
      this.selected = this.setting.options[0]
      this.cookieService.set("temp_config_" + this.setting.config.replace(" ", "_").toLowerCase(), this.selected)
    }
  }

}