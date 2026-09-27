import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  imports: [MatButtonModule, MatToolbarModule],
  selector: 'app-navbar-sub',
  styleUrl: './navbar-sub.scss',
  templateUrl: './navbar-sub.html',
})
export class NavbarSub {}
