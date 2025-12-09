import { Component } from '@angular/core';
import { ContentListComponent } from '../../components/content-list/content-list.component';

@Component({
  selector: 'app-manhua',
  standalone: true,
  imports: [ContentListComponent],
  templateUrl: './manhua.component.html',
  styleUrl: './manhua.component.css'
})
export class ManhuaComponent { }
