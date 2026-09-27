import { Component, OnInit, signal } from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { article, display } from '../shared/constants';
import newsDbJson from '../services/news-db.json';
import { NewsScrolling } from '../news-scrolling/news-scrolling';

@Component({
  imports: [NewsCard, NewsScrolling],
  selector: 'app-news-main',
  styleUrl: './news-main.scss',
  templateUrl: './news-main.html',
})
export class NewsMain implements OnInit {
  articles = [article];

  newsdata: any = newsDbJson; //create class

  highlightArticles = this.newsdata.articles.slice(0, 2);
  normalArticles = this.newsdata.articles.slice(2,4);
  mdArticles = this.newsdata.articles.slice(1);

  scrollingArticles = this.newsdata.articles;


  ngOnInit(): void {};

  public landscapeDisplay: display = display.landscape;
  public normalDisplay: display = display.normal;
  public noimgDisplay: display = display.noimg;

}
