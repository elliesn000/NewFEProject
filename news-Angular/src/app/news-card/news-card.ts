import { Component, input } from '@angular/core';
import { MatCard, MatCardImage, MatCardTitle, MatCardContent, MatCardModule } from '@angular/material/card';
import {display} from '../shared/constants';

@Component({
  imports: [MatCard, MatCardImage, MatCardTitle, MatCardContent, MatCardModule],
  selector: 'app-news-card',
  styleUrl: './news-card.scss',
  templateUrl: './news-card.html',
})
export class NewsCard {
  newsInput = input<any>();
  displayInput = input<display>(display.normal);
  displayDefine = display;  
}


