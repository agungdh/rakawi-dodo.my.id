import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [ContentListComponent],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent { }
