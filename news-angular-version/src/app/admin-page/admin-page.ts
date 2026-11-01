import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { serviceLocalStorage } from '../services/serviceLocalStorage';
import { Article } from '../services/constants';

@Component({
  imports: [MatButton, MatTableModule, RouterLink, DatePipe],
  selector: 'app-admin-page',
  styleUrl: './admin-page.scss',
  templateUrl: './admin-page.html',
})
export class AdminPage {
  private readonly service = inject(serviceLocalStorage);
  private readonly snackBar = inject(MatSnackBar);

  private readonly arAll = signal<Article[]>(this.service.getAll());

  protected readonly arLocal = computed(() =>
    [...this.arAll()].sort(
      (a, b) => new Date(b.createdDay).getTime() - new Date(a.createdDay).getTime(),
    ),
  );

  protected displayedColumns = ['number', 'title', 'imagePath', 'createdDay', 'status'];

  protected renewClick() {
    this.service.renew();
    this.arAll.set(this.service.getAll());
    this.snackBar.open('renew finished', 'close', { duration: 3000 });
  }
}