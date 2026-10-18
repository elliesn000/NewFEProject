import { Component, signal, inject } from '@angular/core';
import { form, FormField, required, pattern, maxLength, submit } from '@angular/forms/signals'
import { articleObj } from '../services/constants';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor } from '@angular/material/button';
import { serviceLocalStorage } from '../services/serviceLocalStorage';


@Component({
  imports: [ReactiveFormsModule, MatInputModule, FormField, MatAnchor],
  selector: 'app-page-create',
  styleUrl: './page-create.scss',
  templateUrl: './page-create.html',
})

export class PageCreate {
  articleInput = signal<articleObj>({
    title: '',
    createDay: '',
    content: '',
    imagePath: '',
    status: '',
  });

  articleForm = form(this.articleInput, (schemaPath) => {
    required(schemaPath.title, { message: 'title can not empty' });
    maxLength(schemaPath.title, 60, { message: 'title is too long, need < 60 characters' })
    pattern(schemaPath.title, /^[a-zA-Z]+$/, { message: 'title need only characters' });
    maxLength(schemaPath.content, 500, { message: 'content is too long, need < 500 characters' })
  });

  private service = inject(serviceLocalStorage);
 

  async onSubmit(event: Event) {
    this.articleInput().createDay = new Date(Date.now()).toLocaleDateString('en-CA');
    
    this.articleInput().status = 'draft';

    event.preventDefault();

    submit(this.articleForm, async () => {
      const preLocal: Array<articleObj> = this.service.getItem();
      const articleTemp: articleObj = this.articleInput();
      const afterLocal: Array<articleObj> = [articleTemp,...preLocal];
      this.service.setItem(`arLocal`, afterLocal);
      console.log(localStorage.length);
      window.alert('created');
    })
  }

}
