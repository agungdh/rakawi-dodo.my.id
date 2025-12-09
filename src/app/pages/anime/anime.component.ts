import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [ContentListComponent],
  template: `<app-content-list contentType="anime" title="ANIME LIST" subtitle="Listing my 700+ watched anime..." />`,
  styles: [`:host { display: flex; flex-direction: column; flex-grow: 1; }`]
})
export class AnimeComponent { }
