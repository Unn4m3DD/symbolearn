import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  small_cards_data = [{
    title: "Today",
    value: "1 hour"
  },
  {
    title: "Correct Characters",
    value: "273"
  },
  {
    title: "Incorrect Characters",
    value: "16"
  },
  {
    title: "Words",
    value: "98"
  },
  {
    title: "Exercises",
    value: "7"
  }
  ]

  charts = [
    {
      id: "p_ot",
      title: "Precision Over Time",
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
        title: "Current Accuracy",
        value: "95",
        improvement: "+7.00% - in 1 month"
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
      title: "WPM Over Time",
      extra: {
        title: "Current WPM",
        value: "120",
        improvement: "+25.00% - in 1 month"
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
    }
  ]

  ngAfterViewInit(): void {
    this.left_arrow.nativeElement.style.display = 'none';
    if(this.small_cards_data.length <= 4) this.right_arrow.nativeElement.style.display = 'none';
    this.left_arrow_bellow.nativeElement.style.display = 'none';
    if(this.charts.length <= 2) this.right_arrow_bellow.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
  }

  slide(direction: string) {
    const deltaX = 240 * 1;
    if (direction == "right") this.small_cards_buffer += deltaX;
    else if (direction == "left") this.small_cards_buffer -= deltaX;
    if(this.small_cards_buffer == 0) this.left_arrow.nativeElement.style.display = 'none';
    else this.left_arrow.nativeElement.style.display = 'inline';
    if(this.small_cards_buffer >= deltaX * (this.small_cards_data.length - 4)) this.right_arrow.nativeElement.style.display = 'none';
    else this.right_arrow.nativeElement.style.display = 'inline';
    this.smaller_slider.nativeElement.style.transform = `translate(-${this.small_cards_buffer}px, 0)`;
  }

  slide_bellow(direction: string) {
    const deltaX = 520 * 1;
    if (direction == "right") this.big_cards_buffer += deltaX;
    else if (direction == "left") this.big_cards_buffer -= deltaX;
    if(this.big_cards_buffer == 0) this.left_arrow_bellow.nativeElement.style.display = 'none';
    else this.left_arrow_bellow.nativeElement.style.display = 'inline';
    if(this.big_cards_buffer >= deltaX * (this.charts.length - 2)) this.right_arrow_bellow.nativeElement.style.display = 'none';
    else this.right_arrow_bellow.nativeElement.style.display = 'inline';
    this.chart_slider.nativeElement.style.transform = `translate(-${this.big_cards_buffer}px, 0)`;
  }

}
