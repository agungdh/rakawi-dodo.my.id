import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-manhwa',
  standalone: true,
  imports: [ContentListComponent],
  template: `<app-content-list contentType="manhwa" title="MANHWA" subtitle="Solo Leveling and more..." />`,
  styles: [`:host { display: flex; flex-direction: column; flex-grow: 1; }`]
})
export class ManhwaComponent { }
