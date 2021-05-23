import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { exercises } from '../global';

@Component({
  selector: 'app-learn-morse',
  templateUrl: './learn-morse.component.html',
  styleUrls: ['./learn-morse.component.css']
})
export class LearnMorseComponent implements OnInit {
  @ViewChild('morse_div') morse_div: ElementRef | undefined;
  @ViewChild('modal') modal: ElementRef | any;
  current_language: string;
  correct_counter: number = 0;
  getImage(morseCode: string): string {
    return `assets/${this.current_language}/${morseCode.toLowerCase()}.png`;
  }
  help: boolean;
  user_input: string = ""
  to_type_render: { char: string, index: number }[][] = []
  to_type: string;
  constructor(private cookieService: CookieService) {
    this.to_type = exercises[new URLSearchParams(window.location.search).get('exercise') ?? "Lusíadas"].text
    this.help = cookieService.get("config_help_level") == "Character Over Symbol"
    this.current_language = new URLSearchParams(window.location.search).get('lang') ?? "morse-code";
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
  }
  last_wrong = false;
  current_char = "";
  current_offset = 0
  onUserInput(event: KeyboardEvent) {
    event.preventDefault()
    if (event.key.length == 1) {
      if (this.current_char == "") {
        this.current_char = event.key
        return
      }
      if (this.current_char.toLowerCase() == this.to_type.charAt(this.correct_counter).toLowerCase()
        || this.current_char.toLowerCase() == "⍽" && " " == this.to_type.charAt(this.correct_counter).toLowerCase()) {
        this.correct_counter++
        this.user_input += this.current_char != "⍽" ? this.current_char : " "
        if (this.current_char == "⍽" && this.morse_div) {
          this.current_offset += 100 / this.to_type.split(" ").length
          this.morse_div.nativeElement.style.transform = `translate(0, -${this.current_offset}%)`;
        }
      }
      this.current_char = event.key != " " ? event.key : "⍽"
      if (this.user_input.length > 20)
        this.user_input = this.user_input.substring(1);
    }
    if (this.correct_counter >= this.to_type.length - 1) {
      this.modal.nativeElement.style.visibility = 'visible';
      this.modal.nativeElement.style.opacity = '1';
    }
  }
  preventDelete(e: KeyboardEvent, text_input: HTMLInputElement) {
    if (e.key == "Backspace" && text_input == document.activeElement) {
      e.preventDefault();
    }
  }
  ngOnInit(): void {
  }

  closeModal() {
    this.modal.nativeElement.style.visibility = 'hidden';
    this.modal.nativeElement.style.opacity = '0';
  }

  restart() {
    location.reload();
  }

  changePage(page_name: string, query?: string | undefined) {
    if (query == undefined) query = ""
    window.location = <any>("/" + page_name + "?" + query)
  }

}
