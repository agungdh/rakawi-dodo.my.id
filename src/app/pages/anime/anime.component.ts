import { Component } from '@angular/core';

@Component({
    selector: 'app-anime',
    standalone: true,
    template: `
    <div class="pt-20 min-h-screen text-center">
      <h1 class="text-6xl font-black text-[var(--color-cyber-purple)] mb-4">ANIME LIST</h1>
      <p class="text-xl opacity-60">Listing my 700+ watched anime...</p>
    </div>
  `
})
export class AnimeComponent { }
