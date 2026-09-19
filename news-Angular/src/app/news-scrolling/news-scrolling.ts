import { Component, input } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  imports: [ScrollingModule],
  selector: 'app-news-scrolling',
  styleUrl: './news-scrolling.scss',
  templateUrl: './news-scrolling.html',
})
export class NewsScrolling {
  scrollingInput = input<any>();
}
