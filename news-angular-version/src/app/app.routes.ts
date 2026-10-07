import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'admin', component: AdminPage, title: 'Admin Page'},    
];
