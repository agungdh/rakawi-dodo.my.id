import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { MangaComponent } from './pages/manga/manga.component';
import { ManhwaComponent } from './pages/manhwa/manhwa.component';
import { ManhuaComponent } from './pages/manhua/manhua.component';
import { BiodataComponent } from './pages/biodata/biodata.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'anime', component: AnimeComponent },
    { path: 'manga', component: MangaComponent },
    { path: 'manhwa', component: ManhwaComponent },
    { path: 'manhua', component: ManhuaComponent },
    { path: 'biodata', component: BiodataComponent },
];
