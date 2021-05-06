import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-morse',
  templateUrl: './learn-morse.component.html',
  styleUrls: ['./learn-morse.component.css']
})
export class LearnMorseComponent implements OnInit {

  user_input: string = ""
  constructor() { }
  onUserInput(event: KeyboardEvent) {
    if (event.key.length == 1) {
      this.user_input += event.key;
      if (this.user_input.length > 20)
        this.user_input = this.user_input.substring(1);
    }
  }
  ngOnInit(): void {
  }

}
