import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NewsCard } from '../news-card/news-card';
import { NewsScrolling } from '../news-scrolling/news-scrolling';
import { serviceLocalStorage } from '../../services/serviceLocalStorage';
import { Article, display } from '../../services/constants';

@Component({
  imports: [NewsCard, NewsScrolling, MatTabsModule, MatCardModule],
  selector: 'app-news-main',
  styleUrl: './news-main.scss',
  templateUrl: './news-main.html',
})
export class NewsMain {
  private service = inject(serviceLocalStorage);

  newsdata: Article[] = this.service
    .getAll()
    .filter((a) => a.status === 'public')
    .sort((a, b) => new Date(b.createdDay).getTime() - new Date(a.createdDay).getTime());

  highlightArticles = this.newsdata.slice(0, 2);
  normalArticles = this.newsdata.slice(2, 4);
  mdArticles = this.newsdata.slice(1);

  mostReadArticles = this.newsdata;
  mostCommentedArticles = [...this.newsdata].reverse();

  public landscapeDisplay: display = display.landscape;
  public normalDisplay: display = display.normal;
  public noimgDisplay: display = display.noimg;
}