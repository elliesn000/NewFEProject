import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Article, display } from '../../services/constants';

@Component({
  imports: [MatCardModule],
  selector: 'app-news-card',
  styleUrl: './news-card.scss',
  templateUrl: './news-card.html',
})
export class NewsCard {
  newsInput = input.required<Article>();
  displayInput = input<display>(display.normal);
  displayDefine = display;
}