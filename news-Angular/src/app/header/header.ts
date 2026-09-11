import { Component } from '@angular/core';
import { Weather } from './weather/weather';
import { Login } from './login/login';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';



@Component({
  imports: [Weather, Login, MatDividerModule, MatIconModule, MatButtonModule, MatToolbarModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected titles = 'The most read Vietnamese newspaper';
}
