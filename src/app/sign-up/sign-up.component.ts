import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
  setLoggedIn() {
    this.cookieService.set("logged_in", "true")
    window.location = <any>("/dashboard")
  }
  ngOnInit(): void {
  }

}
