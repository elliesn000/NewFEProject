import { Component, input } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Article } from '../../services/constants';

@Component({
  imports: [ScrollingModule],
  selector: 'app-news-scrolling',
  styleUrl: './news-scrolling.scss',
  templateUrl: './news-scrolling.html',
})
export class NewsScrolling {
  scrollingInput = input<Article[]>([]);
}