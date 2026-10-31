import { Component, input, output, linkedSignal } from '@angular/core';
import { form, FormField, maxLength, pattern, required, submit } from '@angular/forms/signals'
import { Article, ArticleFormValue } from '../services/constants';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';
import { MatSelect, MatOption } from '@angular/material/select';


@Component({
  imports: [ReactiveFormsModule, MatInputModule, FormField, MatAnchor, MatSelect, MatOption],
  selector: 'app-article-form',
  styleUrl: './article-form.scss',
  templateUrl: './article-form.html',
})
export class ArticleForm {

  readonly arInput = input<Article | null>(null);
  
  readonly arData = linkedSignal({
    source: this.arInput,
    computation: (articleFrInput): ArticleFormValue => ({
      title: articleFrInput?.title ?? '',
      content: articleFrInput?.content ?? '',
      imagePath: articleFrInput?.imagePath ?? '',
      status: articleFrInput?.status ?? 'draft'
    })
  });

  readonly arForm = form(this.arData, (a) => {
    required(a.title, { message: 'Title can not empty' });
    maxLength(a.title, 60, { message: 'Title is too long, need < 60 characters' })    
    maxLength(a.content, 1000, { message: 'Content is too long, need < 1000 characters' })
  });

  readonly saved = output<ArticleFormValue>();

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.arForm, async () => {
      this.saved.emit({ ...this.arData() });  
    })
    
  }
}


