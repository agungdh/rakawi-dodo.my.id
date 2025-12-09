import { Component, Input, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentService, ContentItem } from '../../services/content.service';

@Component({
    selector: 'app-content-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.css'
})
export class ContentListComponent implements OnInit {
    @Input({ required: true }) contentType!: 'anime' | 'manga' | 'manhwa' | 'manhua';
    @Input() title!: string;
    @Input() subtitle!: string;

    allItems = signal<ContentItem[]>([]);
    searchQuery = signal('');
    selectedTag = signal('');
    currentPage = signal(1);
    pageSize = 6;

    constructor(private contentService: ContentService) { }

    ngOnInit() {
        this.contentService.getContent(this.contentType).subscribe(data => {
            this.allItems.set(data);
        });
    }

    // Derived state for filtered items
    filteredItems = computed(() => {
        return this.contentService.filterContent(
            this.allItems(),
            this.searchQuery(),
            this.selectedTag()
        );
    });

    // Derived state for paginated items
    paginatedItems = computed(() => {
        return this.contentService.paginate(
            this.filteredItems(),
            this.currentPage(),
            this.pageSize
        );
    });

    // Derived state for unique tags
    availableTags = computed(() => {
        return this.contentService.getUniqueTags(this.allItems());
    });

    totalPages = computed(() => {
        return Math.ceil(this.filteredItems().length / this.pageSize);
    });

    setPage(page: number) {
        if (page >= 1 && page <= this.totalPages()) {
            this.currentPage.set(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    selectTag(tag: string) {
        if (this.selectedTag() === tag) {
            this.selectedTag.set(''); // toggle off
        } else {
            this.selectedTag.set(tag);
        }
        this.currentPage.set(1); // reset to page 1
    }

    onSearchChange(query: string) {
        this.searchQuery.set(query);
        this.currentPage.set(1);
    }
}
