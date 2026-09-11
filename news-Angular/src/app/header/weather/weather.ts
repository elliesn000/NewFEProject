import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  selector: 'app-weather',
  styleUrl: './weather.scss',
  templateUrl: './weather.html',
})
export class Weather {}
