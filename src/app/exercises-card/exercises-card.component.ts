import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercises-card',
  templateUrl: './exercises-card.component.html',
  styleUrls: ['./exercises-card.component.css']
})
export class ExercisesCardComponent implements OnInit {
  @Input('exercise') public exercise: any;
  attempt_display = false;
  constructor() { }
  toggleAttemptDisplay() {
    this.attempt_display = !this.attempt_display;
  }
  ngOnInit(): void {
  }

  changePage(page_name: string, query?: string | undefined) {
    if (query == undefined) query = ""
    window.location = <any>("/" + page_name + "?" + query)
  }

}
