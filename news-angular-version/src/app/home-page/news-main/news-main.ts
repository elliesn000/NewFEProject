import { Component, OnInit, signal } from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { display } from '../../services/constants';
import newsDbJson from '../../services/initArticles.json';
import { NewsScrolling } from '../news-scrolling/news-scrolling';

@Component({
  imports: [NewsCard, NewsScrolling],
  selector: 'app-news-main',
  styleUrl: './news-main.scss',
  templateUrl: './news-main.html',
})
export class NewsMain implements OnInit {
  
  
  
  newsdata: any = newsDbJson.articles;

  highlightArticles = this.newsdata.slice(0, 2);
  normalArticles = this.newsdata.slice(2, 4);
  mdArticles = this.newsdata.slice(1);

  scrollingArticles = this.newsdata;


  ngOnInit(): void { };

  public landscapeDisplay: display = display.landscape;
  public normalDisplay: display = display.normal;
  public noimgDisplay: display = display.noimg;

}
