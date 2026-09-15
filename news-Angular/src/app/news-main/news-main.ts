import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NewsDb } from '../news-db/news-db';
import { size } from '../shared/constants';
import newsDb from '../news-db/news-db.json';

@Component({
  imports: [NewsDb, MatGridListModule, MatButtonModule, MatCardModule],
  selector: 'app-news-main',
  styleUrl: './news-main.scss',
  templateUrl: './news-main.html',
})
export class NewsMain implements OnInit {

  newsdata: any = newsDb;
  ngOnInit(): void { };

  public landscapeSzie: size = size.landscape;
  public normalSize: size = size.normal;

}
