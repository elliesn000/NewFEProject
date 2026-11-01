import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ArticleForm } from '../article-form/article-form';
import { serviceLocalStorage } from '../services/serviceLocalStorage';
import { ArticleFormValue } from '../services/constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-edit-article',
  imports: [ArticleForm, RouterLink],
  templateUrl: './page-edit-article.html',
})

export class PageEditArticle {
  private readonly storage = inject(serviceLocalStorage);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  readonly id = input.required<string>();
  readonly article = computed(() => this.storage.getById(this.id()));

  onSaved(value: ArticleFormValue) {
    const old = this.article();
    if (!old) return;

    this.storage.update({ ...old, ...value });

    this.snackBar
      .open('updated!', 'return Admin Page')
      .onAction()
      .subscribe(() => this.router.navigate(['/admin']));
  }

  onCancel() {
    this.router.navigate(['/admin']);
  }
}