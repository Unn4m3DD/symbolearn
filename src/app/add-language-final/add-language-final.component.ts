import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NotifierService } from 'angular-notifier';
import { CookieService } from 'ngx-cookie-service';
import locale from '../../languages';

@Component({
  selector: 'app-add-language-final',
  templateUrl: './add-language-final.component.html',
  styleUrls: ['./add-language-final.component.css']
})
export class AddLanguageFinalComponent implements OnInit {
  @ViewChild('file_input') file_input: ElementRef | undefined;
  to_render: { character: string, image: string | SafeUrl, hovering: number }[];
  current_char: string = "";
  language_name: string = "";
  locale: any;
  lang: string;
  constructor(private sanitizer: DomSanitizer, private notifier: NotifierService, private cookieService: CookieService) {
    this.to_render = []
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get('lang');
    for (let i of "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""))
      this.to_render.push({ character: i, image: value != "" ? `/assets/${value}/` + i.toLowerCase() + ".png" : "", hovering: 0 })
    this.locale = locale.add_lang_final;
    switch (this.cookieService.get("config_language")) {
      case "1":
        this.lang = "en";
        break;
      case "0":
        this.lang = "pt";
        break;
      default:
        this.lang = "pt";
        break;
    }
  }
  allFull() {
    return this.to_render.reduce((e1, e2) => e1 && e2.image != '', true)
  }
  preventDefaults(e: Event) {
    e.preventDefault()
    e.stopPropagation()
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  parseFile(char: string, event: any) {
    const item = this.to_render.find(e => e.character == char)
    if (item) {
      item.image =
        this.sanitize((window.URL ? URL : webkitURL).createObjectURL(event.dataTransfer.files[0]))
      item.hovering = 0
    }
  }
  selectedFile(event: any) {
    this.parseFile(this.current_char, { dataTransfer: event.target })
  }
  selectFile(char: string) {
    this.current_char = char
    this.file_input?.nativeElement.click()
  }
  last_char: string = "";
  setHovering(char: string, value: boolean) {
    const item = this.to_render.find(e => e.character == char)

    if (item) {
      if (this.last_char != char) {
        this.to_render.map(e => { if (e.character != char) e.hovering = 0 })
        this.last_char = char;
      }
      if (value)
        item.hovering++
      else
        item.hovering--
    }
  }
  name_length = 0;
  keydown(event: KeyboardEvent) {
    this.name_length++;
    this.language_name = locale.semaphore_lang[this.lang].substring(0, this.name_length);
    event.preventDefault()
  }

  changePage(page_name: string, query?: string | undefined) {
    if (this.language_name.length == 0) {
      this.notifier.notify('error', 'Cannot add language without a name');
      return
    }
    this.cookieService.set("semaphore", "true")
    if (query == undefined) query = ""
    window.location = <any>("/" + page_name + "?" + query)
  }

  ngOnInit(): void {
  }

}
