import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, Biodata } from '../../services/content.service';

@Component({
    selector: 'app-biodata',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './biodata.component.html',
    styleUrl: './biodata.component.css'
})
export class BiodataComponent implements OnInit {
    biodata = signal<Biodata | null>(null);

    constructor(private contentService: ContentService) { }

    ngOnInit() {
        this.contentService.getBiodata().subscribe(data => {
            this.biodata.set(data);
        });
    }
}
