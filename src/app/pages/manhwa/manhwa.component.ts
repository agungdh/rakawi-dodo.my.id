import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-manhwa',
  standalone: true,
  imports: [ContentListComponent],
  templateUrl: './manhwa.component.html',
  styleUrl: './manhwa.component.css'
})
export class ManhwaComponent { }
