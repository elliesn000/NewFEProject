import { Component, computed, input, output, linkedSignal } from '@angular/core';
import { form, FormField, maxLength, pattern, required, submit, validate } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';
import { Article, ArticleFormValue } from '../services/constants';
import { FieldError } from './field-error';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatButton } from '@angular/material/button';


const TITLE_REGEX = /^[^<>{}\[\]\\|^`~@#*]+$/u;

const IMAGE_REGEX = /^(https?:\/\/|\/).+\.(png|jpe?g|webp|gif)(\?.*)?$/i;

@Component({
  imports: [FieldError, MatInputModule, FormField, MatSelect, MatOption, MatButton],
  selector: 'app-article-form',
  styleUrl: './article-form.scss',
  templateUrl: './article-form.html',
})
export class ArticleForm {
  readonly arInput = input<Article | null>(null);
  readonly submitLabel = input('Save');
  readonly cancelled = output<void>();
  readonly saved = output<ArticleFormValue>();

  readonly arData = linkedSignal({
    source: this.arInput,
    computation: (articleFrInput): ArticleFormValue => ({
      title: articleFrInput?.title ?? '',
      content: articleFrInput?.content ?? '',
      imagePath: articleFrInput?.imagePath ?? '',
      status: articleFrInput?.status ?? 'draft',
    }),
  });

  readonly arForm = form(this.arData, (a) => {
    //title
    required(a.title, { message: 'title can not empty' });
    validate(a.title, ({ value }) =>
      value().length > 0 && value().trim() === ''
        ? { kind: 'blank', message: 'title not only spaces' }
        : undefined,
    );
    pattern(a.title, TITLE_REGEX, { message: 'title invalid' });
    maxLength(a.title, 60, { message: 'title is too long, need < 60 characters' });

    //content
    maxLength(a.content, 1000, { message: 'content is too long, need < 1000 characters' });
    //content-public
    validate(a.content, ({ value, valueOf }) =>
      valueOf(a.status) === 'public' && value().trim() === ''
        ? { kind: 'contentRequired', message: 'public needs content' }
        : undefined,
    );

    //image-public
    validate(a.imagePath, ({ value, valueOf }) => {
      if (valueOf(a.status) !== 'public') return undefined;
      const path = value().trim();
      if (path === '') {
        return { kind: 'imageRequired', message: 'public needs image' };
      }
      if (!IMAGE_REGEX.test(path)) {
        return { kind: 'imageUrl', message: 'image link is not valid (png, jpg, webp, gif)' };
      }
      return undefined;
    });

    required(a.status, { message: 'choose status' });
  });

  //image-normal-warning
  protected readonly imageWarning = computed(() => {
    const v = this.arData();
    const path = v.imagePath.trim();
    return v.status === 'draft' && path !== '' && !IMAGE_REGEX.test(path)
      ? 'image link invalid. if you want public, need valid link.'
      : '';
  });


  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.arForm, async () => {
      const a = this.arData();
      this.saved.emit({
        title: a.title.trim(),
        content: a.content.trim(),
        imagePath: a.imagePath.trim(),
        status: a.status,
      });
    });
  }

  resetForm() {
    this.arData.set({ title: '', content: '', imagePath: '', status: 'draft' });
    this.arForm().reset();
  }
}