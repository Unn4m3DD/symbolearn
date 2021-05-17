import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  @ViewChild('file_input') file_input: ElementRef | undefined;
  constructor() {

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

  }
  ngOnInit(): void {
  }

}
