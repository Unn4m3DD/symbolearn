import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-add-language-final',
  templateUrl: './add-language-final.component.html',
  styleUrls: ['./add-language-final.component.css']
})
export class AddLanguageFinalComponent implements OnInit {
  to_render: { character: string, image: string | SafeUrl }[];
  constructor(private sanitizer: DomSanitizer) {
    this.to_render = []
    for (let i of "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""))
      this.to_render.push({ character: i, image: "" })

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
    if (item)
      item.image =
        this.sanitize((window.URL ? URL : webkitURL).createObjectURL(event.dataTransfer.files[0]))

  }
  ngOnInit(): void {
  }

}
