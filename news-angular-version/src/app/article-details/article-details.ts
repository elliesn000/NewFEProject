import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articleObj } from '../services/constants';
import { serviceLocalStorage } from '../services/serviceLocalStorage';
import { MatFormField, MatLabel } from '@angular/material/input';
import { form, maxLength, pattern, required, submit, FormField } from '@angular/forms/signals';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';

@Component({
  imports: [MatFormField, MatLabel, FormField, ReactiveFormsModule, MatInputModule, MatAnchor],
  selector: 'app-article-details',
  styleUrl: './article-details.scss',
  templateUrl: './article-details.html',
})
export class ArticleDetails {

  route: ActivatedRoute = inject(ActivatedRoute);
  articleId: number = -1;
  protected service = inject(serviceLocalStorage);
  arLocal: Array<articleObj> = this.service.getItem();

  arEdit = signal<articleObj>({
  title: '',
  createDay: '',
  content: '',
  imagePath: '',
  status: '',
  });

  constructor() {
    this.route.paramMap.subscribe(params => { this.articleId = Number(params.get('id')) });
    console.log(this.articleId);
    console.log(this.arEdit());
    let arSelected = this.arLocal[this.articleId];
    this.arEdit.set({...arSelected});
  }  



arForm = form(this.arEdit, (schemaPath) => {
  required(schemaPath.title, { message: 'title can not empty' });
  maxLength(schemaPath.title, 60, { message: 'title is too long, need < 60 characters' })
  pattern(schemaPath.title, /^[a-zA-Z]+$/, { message: 'title need only characters' });
  maxLength(schemaPath.content, 500, { message: 'content is too long, need < 500 characters' })
});

  async onSubmit(event: Event) {
  event.preventDefault();
  submit(this.arForm, async () => {

    const arTemp: articleObj = this.arEdit();
    this.arLocal[this.articleId] = arTemp;
    this.service.setItem(`arLocal`, this.arLocal);
  })
}

}
