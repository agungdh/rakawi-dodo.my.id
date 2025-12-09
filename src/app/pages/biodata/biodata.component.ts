import { Component } from '@angular/core';

@Component({
    selector: 'app-biodata',
    standalone: true,
    template: `
    <div class="pt-20 min-h-screen text-center">
      <h1 class="text-6xl font-black text-[var(--color-cyber-purple)] mb-4">BIODATA</h1>
      <p class="text-xl opacity-60">Name: Rakawi Dodo</p>
      <p class="text-xl opacity-60">Role: Professional Wibu</p>
    </div>
  `
})
export class BiodataComponent { }
