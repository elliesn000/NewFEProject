import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {DialogModule} from '@angular/cdk/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, DialogModule, MatButtonModule, MatDivider],
  selector: 'app-login-dialog',
  styleUrl: './login-dialog.scss',
  templateUrl: './login-dialog.html',
})
export class LoginDialog {



}
