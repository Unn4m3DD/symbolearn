import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learn-morse',
  templateUrl: './learn-morse.component.html',
  styleUrls: ['./learn-morse.component.css']
})
export class LearnMorseComponent implements OnInit {
  correct_counter: number = 0;
  encodeMorse(morseCode: string): string {
    let ref: { [key: string]: string } = {
      'a': '·-',
      'b': '-···',
      'c': '-·-·',
      'd': '-··',
      'e': '·',
      'f': '··-·',
      'g': '--·',
      'h': '····',
      'i': '··',
      'j': '·---',
      'k': '-·-',
      'l': '·-··',
      'm': '--',
      'n': '-·',
      'o': '---',
      'p': '·--·',
      'q': '--·-',
      'r': '·-·',
      's': '···',
      't': '-',
      'u': '··-',
      'v': '···-',
      'w': '·--',
      'x': '-··-',
      'y': '-·--',
      'z': '--··',
      '1': '·----',
      '2': '··---',
      '3': '···--',
      '4': '····-',
      '5': '·····',
      '6': '-····',
      '7': '--···',
      '8': '---··',
      '9': '----·',
      '0': '-----',
      ' ': '\n'
    };
    return ref[morseCode.toLowerCase()];
  }

  user_input: string = ""
  to_type_render: { char: string, index: number }[][] = []
  to_type = "Hello World"
  constructor() {
    let g_index = 0;
    for (let i = 0; i < this.to_type.split(" ").length; i++) {
      this.to_type_render.push([])
      g_index++
      for (let j = 0; j < this.to_type.split(" ")[i].length; j++) {
        this.to_type_render[i].push({ char: this.to_type.split(" ")[i].charAt(j), index: g_index })
        g_index++
      }
    }
    window.onkeyup = (e: KeyboardEvent) => this.onUserInput(e);
    console.log(this.to_type)
  }
  last_wrong = false;
  current_char = "";
  onUserInput(event: KeyboardEvent) {
    event.preventDefault()
    if (event.key.length == 1) {
      if (this.current_char == "") {
        this.current_char = event.key
        return
      }
      if (this.current_char.toLowerCase() == this.to_type.charAt(this.correct_counter).toLowerCase()) {
        this.correct_counter++
        console.log(this.correct_counter)
        this.user_input += this.current_char
      }
      this.current_char = event.key
      if (this.user_input.length > 20)
        this.user_input = this.user_input.substring(1);
    }
    console.log(this.correct_counter)
  }
  preventDelete(e: KeyboardEvent, text_input: HTMLInputElement) {
    if (e.key == "Backspace" && text_input == document.activeElement) {
      e.preventDefault();
    }
  }
  ngOnInit(): void {
  }

}