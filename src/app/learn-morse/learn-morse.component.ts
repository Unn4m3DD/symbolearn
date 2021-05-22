import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-learn-morse',
  templateUrl: './learn-morse.component.html',
  styleUrls: ['./learn-morse.component.css']
})
export class LearnMorseComponent implements OnInit {
  @ViewChild('morse_div') morse_div: ElementRef | undefined;
  current_language: string;
  correct_counter: number = 0;
  getImage(morseCode: string): string {
    return `assets/${this.current_language}/${morseCode.toLowerCase()}.png`;
  }
  help : boolean;
  user_input: string = ""
  to_type_render: { char: string, index: number }[][] = []
  to_type = "As armas e os baroes assinalados Que da ocidental praia Lusitana Por mares nunca de antes navegados Passaram ainda alem da Taprobana Em perigos e guerras esforcados Mais do que prometia a forca humana E entre gente remota edificaram Novo Reino que tanto sublimaram"
  constructor(private cookieService: CookieService) {
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
