import { Component, inject, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticleForm } from '../article-form/article-form';
import { serviceLocalStorage } from '../services/serviceLocalStorage';
import { Article, ArticleFormValue } from '../services/constants';

@Component({
  selector: 'app-page-create-article',
  imports: [ArticleForm],
  templateUrl: './page-create-article.html',
})
export class PageCreateArticle {
  private readonly storage = inject(serviceLocalStorage);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  private readonly form = viewChild.required(ArticleForm);

  onSave(value: ArticleFormValue) {

    const article: Article = {
      ...value,
      id: crypto.randomUUID(),
      createdDay: new Date().toISOString(),
    };
    this.storage.add(article);

    this.form().resetForm();

    this.snackBar
      .open('saved. create another aticle', 'return Admin', { duration: 6000 })
      .onAction()
      .subscribe(() => this.router.navigate(['/admin']));
  }

  backToAdmin() {
    this.router.navigate(['/admin']);
  }
}