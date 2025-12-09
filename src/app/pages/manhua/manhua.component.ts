import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-manhua',
  standalone: true,
  imports: [ContentListComponent],
  template: `<app-content-list contentType="manhua" title="MANHUA" subtitle="Cultivating immortality..." />`,
  styles: [`:host { display: flex; flex-direction: column; flex-grow: 1; }`]
})
export class ManhuaComponent { }
