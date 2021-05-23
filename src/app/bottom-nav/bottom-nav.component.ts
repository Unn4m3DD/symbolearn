import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service"

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  setLoggedOut() {
    this.cookieService.delete("logged_in")
    this.cookieService.delete("semaphore")
    window.location.reload();
  }

  ngOnInit(): void {
  }
  goToGitHub(){
    window.open("https://github.com/Unn4m3DD/symbolearn", "_blank")
  }

}
