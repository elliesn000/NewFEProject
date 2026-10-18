import { Component, OnInit, inject } from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { articleObj, display } from '../../services/constants';
import { NewsScrolling } from '../news-scrolling/news-scrolling';
import { serviceLocalStorage } from '../../services/serviceLocalStorage';

@Component({
  imports: [NewsCard, NewsScrolling],
  selector: 'app-news-main',
  styleUrl: './news-main.scss',
  templateUrl: './news-main.html',
})
export class NewsMain implements OnInit {
  private service = inject(serviceLocalStorage);
  newsdata: Array<articleObj> = this.service.getItem();  


  highlightArticles = this.newsdata.slice(0, 2);
  normalArticles = this.newsdata.slice(2, 4);
  mdArticles = this.newsdata.slice(1);

  scrollingArticles = this.newsdata;


  ngOnInit(): void { 
    console.log(this.newsdata);
  };

  public landscapeDisplay: display = display.landscape;
  public normalDisplay: display = display.normal;
  public noimgDisplay: display = display.noimg;

}
