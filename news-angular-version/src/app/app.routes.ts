import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';
import { HomePage } from './home-page/home-page';
import { ArticleDetails } from './article-details/article-details';
import { PageCreate } from './page-create/page-create';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'admin', component: AdminPage, title: 'Admin Page'},    
    {path: 'details/:productId', component: ArticleDetails, title: '{{productId}}'},
    {path: 'admin/create', component: PageCreate, title: 'Create Page'}
];

