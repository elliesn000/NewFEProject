import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';
import { HomePage } from './home-page/home-page';
import {PageCreateArticle} from './page-create-article/page-create-article'
import {PageEditArticle} from './page-edit-article/page-edit-article'
import { ArticleForm } from './article-form/article-form';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'admin', component: AdminPage, title: 'Admin Page' },
  { path: 'admin/create', component: PageCreateArticle, title: 'Create Article' },
  { path: 'admin/edit/:id', component: PageEditArticle, title: 'Edit Article' },
];

