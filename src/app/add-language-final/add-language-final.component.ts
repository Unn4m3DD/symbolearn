import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-language-final',
  templateUrl: './add-language-final.component.html',
  styleUrls: ['./add-language-final.component.css']
})
export class AddLanguageFinalComponent implements OnInit {
  @ViewChild('file_input') file_input: ElementRef | undefined;
  to_render: { character: string, image: string | SafeUrl, hovering: number }[];
  current_char: string = "";
  constructor(private sanitizer: DomSanitizer) {
    this.to_render = []
    for (let i of "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""))
      this.to_render.push({ character: i, image: "", hovering: 0 })

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
  setHovering(char: string, value: boolean) {
    const item = this.to_render.find(e => e.character == char)
    if (item)
      if (value)
        item.hovering++
      else
        item.hovering--
  }
  ngOnInit(): void {
  }

}
