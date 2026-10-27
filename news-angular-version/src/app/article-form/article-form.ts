import { Component, signal, input, output, linkedSignal } from '@angular/core';
import { form, FormField, maxLength, pattern, required, submit } from '@angular/forms/signals'
import { Article, ArticleFormValue } from '../services/constants';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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

  readonly arForm = form(this.arData, (schemaPath) => {
    required(schemaPath.title, { message: 'title can not empty' });
    maxLength(schemaPath.title, 60, { message: 'title is too long, need < 60 characters' })
    pattern(schemaPath.title, /^[a-z A-Z]+$/, { message: 'title need only characters' });
    maxLength(schemaPath.content, 500, { message: 'content is too long, need < 500 characters' })
  });

  readonly saved = output<ArticleFormValue>();

  onSubmit(event: Event) {
    event.preventDefault();
    this.saved.emit({ ...this.arData() });
  }
}


