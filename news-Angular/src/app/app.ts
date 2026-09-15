import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar'
import { NavbarSub } from './navbar-sub/navbar-sub';
import { NewsMain } from './news-main/news-main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, NavbarSub, NewsMain],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('news-Angular');
}
