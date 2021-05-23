import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { exercises, exercises_t } from "./../global";
import { CookieService } from "ngx-cookie-service";
import locale from "../../languages";
@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  @ViewChild('slider') slider: ElementRef | any;
  @ViewChild('right_arrow') right_arrow: ElementRef | any;
  @ViewChild('left_arrow') left_arrow: ElementRef | any;
  public cards_buffer: number = 0;

  exercises: exercises_t
  locale: any;
  lang: string;
  constructor(private cookieService: CookieService) {
    this.exercises = exercises
    this.locale = locale.exercises;
    switch (this.cookieService.get("config_language")) {
      case "English":
        this.lang = "en";
        break;
      case "Portuguese":
        this.lang = "pt";
        break;
      default:
        this.lang = "pt";
        break;
    }
  }

  ngAfterViewInit(): void {
    this.left_arrow.nativeElement.style.display = 'none';
    if (Object.keys(exercises).length <= 4) this.right_arrow.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
  }

  changePage(page_name: string, query?: string | undefined) {
    if (query == undefined) query = ""
    window.location = <any>("/" + page_name + "?" + query)
  }

  slide(direction: string) {
    const deltaX = 300 * 4;
    if (direction == "right") this.cards_buffer += 1;
    else if (direction == "left") this.cards_buffer -= 1;
    if (this.cards_buffer == 0) this.left_arrow.nativeElement.style.display = 'none';
    else this.left_arrow.nativeElement.style.display = 'inline';
    if (this.cards_buffer + 1 >= (Object.keys(exercises).length / 4)) this.right_arrow.nativeElement.style.display = 'none';
    else this.right_arrow.nativeElement.style.display = 'inline';
    this.slider.nativeElement.style.transform = `translate(-${this.cards_buffer * deltaX}px, 0)`;
  }

  exerciseKeys() {
    return Object.keys(exercises)
  }
}
