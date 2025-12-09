import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WIBU_DATA } from '../data/wibu-database';

export interface ContentItem {
    id: number;
    title: string;
    image: string;
    rating: number;
    status: string;
    tags: string[];
    category: string;
}

export interface Biodata {
    name: string;
    avatar: string;
    role: string;
    description: string;
    stats: { label: string; value: string }[];
    favorites: { anime: string; manga: string; character: string };
}

@Injectable({
    providedIn: 'root'
})
export class ContentService {

    constructor() { }

    private getData(): Observable<any> {
        return of(WIBU_DATA);
    }

    // Generic Get All by Type
    getContent(type: 'anime' | 'manga' | 'manhwa' | 'manhua'): Observable<ContentItem[]> {
        return of(WIBU_DATA[type]);
    }

    // Get Biodata
    getBiodata(): Observable<Biodata> {
        return of(WIBU_DATA.biodata as Biodata);
    }

    // Client-side Filter & Search & Pagination Helper
    filterContent(
        items: ContentItem[],
        query: string = '',
        tag: string = '',
        category: string = ''
    ): ContentItem[] {
        let filtered = items;

        if (query) {
            const q = query.toLowerCase();
            filtered = filtered.filter(item => item.title.toLowerCase().includes(q));
        }

        if (tag) {
            filtered = filtered.filter(item => item.tags.includes(tag));
        }

        if (category) {
            filtered = filtered.filter(item => item.category === category);
        }

        return filtered;
    }

    paginate(items: ContentItem[], page: number, pageSize: number): ContentItem[] {
        const startIndex = (page - 1) * pageSize;
        return items.slice(startIndex, startIndex + pageSize);
    }

    // Get Unique Tags from a dataset
    getUniqueTags(items: ContentItem[]): string[] {
        const tags = new Set<string>();
        items.forEach(item => item.tags.forEach(t => tags.add(t)));
        return Array.from(tags).sort();
    }
}
