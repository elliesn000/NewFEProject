import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';
import { HomePage } from './home-page/home-page';
import { ArticleDetails } from './article-details/article-details';
import { PageCreate } from './page-create/page-create';
import { ArticleForm } from './article-form/article-form';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'admin', component: AdminPage, title: 'Admin Page'},    
    {path: 'details/:id', component: ArticleDetails, title: 'detail'},
    {path: 'admin/create', component: PageCreate, title: 'Create Page'},
    {path: 'admin/test/form', component: ArticleForm, title: 'ArticleForm       '},
];

