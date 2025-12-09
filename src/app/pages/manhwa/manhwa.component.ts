import { Component } from '@angular/core';

@Component({
    selector: 'app-manhwa',
    standalone: true,
    template: `
    <div class="pt-20 min-h-screen text-center">
      <h1 class="text-6xl font-black text-[var(--color-cyber-purple)] mb-4">MANHWA</h1>
      <p class="text-xl opacity-60">Solo Leveling and more...</p>
    </div>
  `
})
export class ManhwaComponent { }
