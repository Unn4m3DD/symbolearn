import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {
  private readonly notifier: NotifierService;


  @ViewChild('title') title: ElementRef | any;
  @ViewChild('subject') subject: ElementRef | any;
  @ViewChild('text') text: ElementRef | any;


  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  save() {
    if(this.title.nativeElement.value.length > 0 && this.subject.nativeElement.value.length > 0 && this.text.nativeElement.value.length > 0) {
      this.title.nativeElement.value = this.subject.nativeElement.value = this.text.nativeElement.value = '';
      this.notifier.notify('success', 'Exercise saved successfully');
    }
    else {
      this.notifier.notify('error', 'Exercise not correcly submitted, make sure all fields have values');
    }
  }
}
