import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { exercise_t } from "../global"
@Component({
  selector: 'app-exercises-card',
  templateUrl: './exercises-card.component.html',
  styleUrls: ['./exercises-card.component.css']
})
export class ExercisesCardComponent implements OnInit {
  @Input('exercise') public exercise: exercise_t;
  attempt_display = false;
  constructor(private cookieService: CookieService) {
  }
  toggleAttemptDisplay() {
    this.attempt_display = !this.attempt_display;
  }
  ngOnInit(): void {
  }

  changePage(page_name: string, query?: string | undefined) {
    if (query == undefined) query = ""
    window.location = <any>("/" + page_name + "?" + query)
  }
  semaphoreActive() {
    return this.cookieService.get("semaphore") == "true"
  }
}
