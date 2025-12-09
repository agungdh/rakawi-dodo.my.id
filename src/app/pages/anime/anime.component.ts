import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [ContentListComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent { }
