import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  exercises = [{
    id: "01",
    title: "SymboLearn",
    subtitle: "Welcome to SymboLearn",
    developer: "Rock Lee",
    stats: {
      wpm: 59,
      accuracy: "85%"
    }
  },
  {
    id: "02",
    title: "Hamlet",
    subtitle: "Hamlet's first act",
    developer: "Baianinho de Mauá",
    stats: {
      wpm: 156,
      accuracy: "99%"
    }
  },
  {
    id: "02",
    title: "Hamlet",
    subtitle: "Hamlet's first act",
    developer: "Baianinho de Mauá",
    stats: {
      wpm: 156,
      accuracy: "99%"
    }
  },
  {
    id: "02",
    title: "Hamlet",
    subtitle: "Hamlet's first act",
    developer: "Baianinho de Mauá",
    stats: {
      wpm: 156,
      accuracy: "99%"
    }
  },
  {
    id: "02",
    title: "Hamlet",
    subtitle: "Hamlet's first act",
    developer: "Baianinho de Mauá",
    stats: {
      wpm: 156,
      accuracy: "99%"
    }
  }
]

  constructor() { }

  ngAfterViewInit(): void {
    this.left_arrow.nativeElement.style.display = 'none';
    if(this.exercises.length <= 4) this.right_arrow.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
  }

  changePage(page_name: string, query?: string | undefined) {
    if (query == undefined) query = ""
    window.location = <any>("/" + page_name + "?" + query)
  }

  slide(direction: string) {
    const deltaX = 300 * 1;
    if (direction == "right") this.cards_buffer += deltaX;
    else if (direction == "left") this.cards_buffer -= deltaX;
    if(this.cards_buffer == 0) this.left_arrow.nativeElement.style.display = 'none';
    else this.left_arrow.nativeElement.style.display = 'inline';
    if(this.cards_buffer >= deltaX * (this.exercises.length - 4)) this.right_arrow.nativeElement.style.display = 'none';
    else this.right_arrow.nativeElement.style.display = 'inline';
    this.slider.nativeElement.style.transform = `translate(-${this.cards_buffer}px, 0)`;
  }

}
