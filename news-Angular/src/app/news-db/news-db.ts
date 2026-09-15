import { Component, OnInit, input } from '@angular/core';
import { MatCard, MatCardImage, MatCardTitle, MatCardContent } from '@angular/material/card';
import newsDb from './news-db.json';
import {size} from '../shared/constants';

@Component({
  imports: [MatCard, MatCardImage, MatCardTitle, MatCardContent],
  selector: 'app-news-db',
  styleUrl: './news-db.scss',
  templateUrl: './news-db.html',
})
export class NewsDb implements OnInit { 

  newsdata : any = newsDb;
  ngOnInit(): void {}; 
  
  articleInput = input<any>();
  sizeInput = input<size>(size.normal);
  sizeDf = size;
}


