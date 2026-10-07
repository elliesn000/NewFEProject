import { Component, inject } from '@angular/core';
import { Weather } from './weather/weather';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog'; 
import { LoginDialog } from './login-dialog/login-dialog';



@Component({
  imports: [Weather, MatDividerModule, MatIconModule, MatButtonModule, MatToolbarModule, DialogModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected titles = 'The most read Vietnamese newspaper';

  dialog = inject(Dialog);
  openDialogLogin(): void {
    this.dialog.open(LoginDialog);
  }
}
