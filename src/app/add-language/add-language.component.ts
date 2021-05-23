import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from "ngx-cookie-service"
import locale from '../../languages';
@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  @ViewChild('file_input') file_input: ElementRef | undefined;
  locale: any;
  lang: string;
  constructor(private cookieService: CookieService) {
    this.locale = locale.add_lang;
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

  showFileBrowser() {
    this.file_input?.nativeElement?.click()

  }
  goToFinal(){
    window.location.pathname = "add-language-final"
  }
  dropFile(event: any) {
    console.log(event)
    event.preventDefault()
  }
  submitFolder(event: any) {
    const files: File[] = Array.from(event.target.files);
    const names = files.map(e => e.name)
    for (let i = 97; i <= 122; i++) {
      if (!names.includes(String.fromCharCode(i) + ".png")) {
        console.log("missing", String.fromCharCode(i))
      }
    }
    window.location = <any> "add-language-final?lang=sem"

  }
  ngOnInit(): void {
  }

}
