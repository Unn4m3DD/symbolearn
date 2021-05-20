import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @Input('setting') public setting:any;
  public selected:string = "";

  constructor(private cookieService: CookieService) {
  }

  changeSelected(selected:string) {
    this.selected = selected
    console.log(this.selected)
    /*
    this.cookieService.set("logged_in", "true")
    window.location.reload();
    */
  }

  ngOnInit(): void {
    this.selected = this.setting.options[0]
  }

}