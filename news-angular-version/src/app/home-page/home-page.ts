import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { NavbarSub } from './navbar-sub/navbar-sub';
import { NewsMain } from './news-main/news-main';


@Component({
  imports: [Navbar, NavbarSub, NewsMain],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {}
