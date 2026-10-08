import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { serviceLocalStorage } from '../services/serviceLocalStorage';



@Component({
  imports: [MatButton],
  selector: 'app-admin-page',
  styleUrl: './admin-page.scss',
  templateUrl: './admin-page.html',
})
export class AdminPage {
  
  protected renewClick() {
    this.serviceLocalStorage.renewItem('yes');
  }  
  
}
