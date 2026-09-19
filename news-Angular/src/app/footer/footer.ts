import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'

@Component({
  imports: [MatGridListModule],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {}
