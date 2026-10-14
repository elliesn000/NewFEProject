import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-page-create',
  styleUrl: './page-create.scss',
  templateUrl: './page-create.html',
})
export class PageCreate {
  name = new FormControl('')
}
