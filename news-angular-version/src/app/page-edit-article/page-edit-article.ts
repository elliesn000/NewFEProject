
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { ArticleForm } from '../article-form/article-form';
import { ArticleFormValue } from '../services/constants';
import { serviceLocalStorage } from '../services/serviceLocalStorage';

@Component({
  selector: 'app-page-edit-article',
  imports: [ArticleForm],
  templateUrl: './page-edit-article.html',
  styleUrl: './page-edit-article.scss'
})
export class PageEditArticle {
}
