import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CookieService } from "ngx-cookie-service"
import locale from '../../languages';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('smaller_slider') smaller_slider: ElementRef | any;
  @ViewChild('right_arrow') right_arrow: ElementRef | any;
  @ViewChild('left_arrow') left_arrow: ElementRef | any;
  public small_cards_buffer: number = 0;

  @ViewChild('left_arrow_bellow') left_arrow_bellow: ElementRef | any;
  @ViewChild('right_arrow_bellow') right_arrow_bellow: ElementRef | any;
  @ViewChild('chart_slider') chart_slider: ElementRef | any;
  public big_cards_buffer: number = 0;

  @ViewChild('container') container: ElementRef | any;
  public time_constraint: string = '';
  public days: string = '1';
  public possible_time_constraints: Array<any> = []

  locale: any;
  lang: string;
  small_cards_data: any;
  charts: any;
  constructor(private cookieService: CookieService) {
    this.locale = locale.dashboard;
    if(this.cookieService.check("time_constraint")) {
      this.days = this.cookieService.get("time_constraint")
    }

    switch (this.cookieService.get("config_language")) {
      case "0":
        this.lang = "pt";
        break;
      case "1":
        this.lang = "en";
        break;
      default:
        this.lang = "pt";
        break;
    }

    this.possible_time_constraints = [
      {
        days: "1",
        value: this.locale.small_cards_data.daily[this.lang],
      },
      {
        days: "7",
        value: this.locale.small_cards_data.weekly[this.lang],
      },
      {
        days: "30",
        value: this.locale.small_cards_data.monthly[this.lang],
      }
    ]

    this.update_time_constraint(this.days, false)

    this.small_cards_data = [
      {
        days: "1",
        content:
        [
          {
            title: this.locale.small_cards_data.today[this.lang],
            value: "2 " + this.locale.small_cards_data.hour[this.lang]
          },
          {
            title: this.locale.small_cards_data.correct_chars[this.lang],
            value: "273"
          },
          {
            title: this.locale.small_cards_data.incorrect_chars[this.lang],
            value: "40"
          },
          {
            title: this.locale.small_cards_data.words[this.lang],
            value: "98"
          },
          {
            title: this.locale.small_cards_data.correct_chars[this.lang],
            value: "1023"
          },
          {
            title: this.locale.small_cards_data.incorrect_chars[this.lang],
            value: "220"
          },
          {
            title: this.locale.small_cards_data.words[this.lang],
            value: "523"
          }
        ]
      },
      {
        days: "7",
        content:
        [
          {
            title: this.locale.small_cards_data.week[this.lang],
            value: "4 " + this.locale.small_cards_data.hour[this.lang]
          },
          {
            title: this.locale.small_cards_data.correct_chars[this.lang],
            value: "1823"
          },
          {
            title: this.locale.small_cards_data.incorrect_chars[this.lang],
            value: "92"
          },
          {
            title: this.locale.small_cards_data.words[this.lang],
            value: "193"
          },
          {
            title: this.locale.small_cards_data.correct_chars[this.lang],
            value: "1229"
          },
          {
            title: this.locale.small_cards_data.incorrect_chars[this.lang],
            value: "490"
          },
          {
            title: this.locale.small_cards_data.words[this.lang],
            value: "2034"
          }
        ]
      },
      {
        days: "30",
        content:
        [
          {
            title: this.locale.small_cards_data.month[this.lang],
            value: "8 " + this.locale.small_cards_data.hour[this.lang]
          },
          {
            title: this.locale.small_cards_data.correct_chars[this.lang],
            value: "5412"
          },
          {
            title: this.locale.small_cards_data.incorrect_chars[this.lang],
            value: "341"
          },
          {
            title: this.locale.small_cards_data.words[this.lang],
            value: "530"
          },
          {
            title: this.locale.small_cards_data.correct_chars[this.lang],
            value: "2836"
          },
          {
            title: this.locale.small_cards_data.incorrect_chars[this.lang],
            value: "5306"
          },
          {
            title: this.locale.small_cards_data.words[this.lang],
            value: "3124"
          }
        ]
      }
    ]

    this.charts = [
      {
        id: "p_ot",
        title: this.locale.charts.precision_ot[this.lang],
        data: [
          { id: 'Dec', value: 28 },
          { id: 'Jan', value: 50 },
          { id: 'Fev', value: 52 },
          { id: 'Mar', value: 57 },
          { id: 'Abr', value: 60 },
          { id: 'Mai', value: 75 },
          { id: 'Jun', value: 95 },
        ],
        extra: {
          title: this.locale.charts.curr_accuracy[this.lang],
          value: "95",
          improvement: "+7.00% - " + this.locale.charts.in[this.lang] + " 1 " + this.locale.charts.month[this.lang]
        }
      },
      {
        id: "wpm_ot",
        data: [
          { id: 'Dec', value: 5 },
          { id: 'Jan', value: 30 },
          { id: 'Fev', value: 60 },
          { id: 'Mar', value: 85 },
          { id: 'Abr', value: 88 },
          { id: 'Mai', value: 80 },
          { id: 'Jun', value: 120 },
        ],
        title: this.locale.charts.wpm_ot[this.lang],
        extra: {
          title: this.locale.charts.curr_wpm[this.lang],
          value: "120",
          improvement: "+25.00% - " + this.locale.charts.in[this.lang] + " 1 " + this.locale.charts.month[this.lang]
        }
      },
      {
        id: "f_rate",
        data: [
          { id: 'Dec', value: 10 },
          { id: 'Jan', value: 21 },
          { id: 'Fev', value: 8 },
          { id: 'Mar', value: 58 },
          { id: 'Abr', value: 92 },
          { id: 'Mai', value: 68 },
          { id: 'Jun', value: 80 },
        ],
        title: "Finish rate",
        extra: {
          title: "Current FR",
          value: "80",
          improvement: "+18.00% - in 1 month"
        }
      },
      {
        id: "t_spent",
        data: [
          { id: 'Dec', value: 4 },
          { id: 'Jan', value: 5 },
          { id: 'Fev', value: 5 },
          { id: 'Mar', value: 5 },
          { id: 'Abr', value: 6 },
          { id: 'Mai', value: 5 },
          { id: 'Jun', value: 8 },
        ],
        title: "Time Spent",
        extra: {
          title: "Current TS",
          value: "8",
          improvement: "+3h - in 1 month"
        }
      }
    ]
  }

  update_time_constraint(days: string, refresh: boolean = true) {
    for(let time of this.possible_time_constraints) {
      if(time.days == days) {
        this.time_constraint = time.value
        this.days = days
      }
    }
    if(refresh) {
      this.update_small_cards()
    }
  }

  hide_container() {
    this.container.nativeElement.style.opacity = 0.5;
    if(!this.container.nativeElement.className.includes('blured')) {
      this.container.nativeElement.className = this.container.nativeElement.className + ' blured';
    }
  }

  show_container() {
    this.container.nativeElement.style.opacity = 1;
    this.container.nativeElement.className = this.container.nativeElement.className.replace('blured', '');
  }

  update_small_cards() {
    this.small_cards_buffer = 0;
    this.left_arrow.nativeElement.style.display = 'none';
    for(let card of this.small_cards_data) {
      if(card.days == this.days) {
        if (card.content.length <= 4) this.right_arrow.nativeElement.style.display = 'none';
        else this.right_arrow.nativeElement.style.display = 'inline';
      }
    }
  }

  ngAfterViewInit(): void {
    this.update_small_cards()
    this.left_arrow_bellow.nativeElement.style.display = 'none';
    if (this.charts.length <= 2) this.right_arrow_bellow.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
  }

  slide(direction: string) {
    const deltaX = 240 * 4;
    if (direction == "right") this.small_cards_buffer += 1;
    else if (direction == "left") this.small_cards_buffer -= 1;
    if (this.small_cards_buffer == 0) this.left_arrow.nativeElement.style.display = 'none';
    else this.left_arrow.nativeElement.style.display = 'inline';
    if (this.small_cards_buffer >= this.small_cards_data.length / 4) this.right_arrow.nativeElement.style.display = 'none';
    else this.right_arrow.nativeElement.style.display = 'inline';
    this.smaller_slider.nativeElement.style.transform = `translate(-${this.small_cards_buffer * deltaX}px, 0)`;
  }

  slide_bellow(direction: string) {
    const deltaX = 520 * 2;
    if (direction == "right") this.big_cards_buffer += 1;
    else if (direction == "left") this.big_cards_buffer -= 1;
    if (this.big_cards_buffer == 0) this.left_arrow_bellow.nativeElement.style.display = 'none';
    else this.left_arrow_bellow.nativeElement.style.display = 'inline';
    if (this.big_cards_buffer + 1 >= this.charts.length / 2) this.right_arrow_bellow.nativeElement.style.display = 'none';
    else this.right_arrow_bellow.nativeElement.style.display = 'inline';
    this.chart_slider.nativeElement.style.transform = `translate(-${this.big_cards_buffer * deltaX}px, 0)`;
  }

}
