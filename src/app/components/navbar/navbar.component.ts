import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
    <nav class="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 px-6 py-4 shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="text-2xl font-black tracking-tighter text-[var(--color-cyber-purple)] hover:text-pink-500 transition-colors">
          RAKA<span class="text-pink-500">WI</span>
        </a>

        <!-- Menu Desktop -->
        <div class="hidden md:flex gap-8 items-center font-bold text-sm tracking-widest uppercase">
          <a routerLink="/anime" routerLinkActive="text-pink-500" class="hover:text-pink-500 transition-colors">Anime</a>
          <a routerLink="/manga" routerLinkActive="text-pink-500" class="hover:text-pink-500 transition-colors">Manga</a>
          <a routerLink="/manhwa" routerLinkActive="text-pink-500" class="hover:text-pink-500 transition-colors">Manhwa</a>
          <a routerLink="/manhua" routerLinkActive="text-pink-500" class="hover:text-pink-500 transition-colors">Manhua</a>
          <a routerLink="/biodata" routerLinkActive="text-pink-500" class="hover:text-pink-500 transition-colors">Biodata</a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent { }
