import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { serviceLocalStorage } from '../services/serviceLocalStorage';
import { articleObj } from '../services/constants';
import { RouterLink } from '@angular/router';


@Component({
  imports: [MatButton, MatTableModule, RouterLink],
  selector: 'app-admin-page',
  styleUrl: './admin-page.scss',
  templateUrl: './admin-page.html',
})


export class AdminPage implements OnInit{
  private service = inject(serviceLocalStorage);
  protected arLocal: articleObj[] = this.service.getItem();
  
  
  ngOnInit(){}

  displayedColumns: string[] = ['number', 'title', 'imagePath', 'createDay', 'status'];

  @ViewChild(MatTable) table!: MatTable<articleObj>;

  protected renewClick() {
    this.service.renewItem('yes');
  };

  protected movetoDetailpage(arChoose: string) {
        
  }




}
