import { Component, OnInit, signal } from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { display } from '../shared/constants';
import newsDbJson from '../services/news-db.json';
import { MatCard } from '@angular/material/card';


@Component({
  imports: [NewsCard, MatCard],
  selector: 'app-news-main',
  styleUrl: './news-main.scss',
  templateUrl: './news-main.html',
})
export class NewsMain implements OnInit {
  newsdata: any = newsDbJson;
  
  highlightArticles = this.newsdata.articles.slice(0,2);
  normalArticles = this.newsdata.articles.slice(2);  

  ngOnInit(): void {
    
   };

  public landscapeDisplay: display = display.landscape;
  public normalDisplay: display = display.normal;
  public noimgDisplay: display = display.noimg;
  
}
