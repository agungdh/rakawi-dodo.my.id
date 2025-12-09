import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [ContentListComponent],
  template: `<app-content-list contentType="manga" title="MANGA COLLECTION" subtitle="Reading list incoming..." />`,
  styles: [`:host { display: flex; flex-direction: column; flex-grow: 1; }`]
})
export class MangaComponent { }
