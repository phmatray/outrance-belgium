import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video16by9',
  templateUrl: './video16by9.component.html',
  styleUrls: ['./video16by9.component.scss']
})
export class Video16by9Component implements OnInit {
  @Input() id: string;

  constructor(private sr: DomSanitizer) {
  }

  ngOnInit() {
  }

  videoUrl() {
    const youtubeUrl = `https://www.youtube.com/embed/${this.id}?showinfo=0`;
    return this.sr.bypassSecurityTrustResourceUrl(youtubeUrl);
  }
}
