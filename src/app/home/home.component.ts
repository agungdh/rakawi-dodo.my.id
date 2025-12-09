import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen relative overflow-hidden font-outfit">
      <!-- Background Elements -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-sakura-pink)] via-white to-[var(--color-sakura-deep)] opacity-50"></div>
      
      <!-- Anime Pattern Overlay using CSS Grid/Radial Gradient simulation -->
      <div class="absolute inset-0 -z-10 opacity-20" 
           style="background-image: radial-gradient(#ff7eb3 2px, transparent 2px); background-size: 30px 30px;">
      </div>

      <!-- Hero Section -->
      <section class="flex flex-col items-center justify-center min-h-screen text-center px-6 relative">
        <div class="absolute top-10 right-10 animate-pulse text-[var(--color-cyber-purple)] opacity-50">
          SYSTEM.Start('ISEKAI_MODE');
        </div>

        <!-- Avatar / Icon Placeholder -->
        <div class="mb-8 p-1 rounded-full bg-gradient-to-tr from-[#ff7eb3] to-[var(--color-cyber-purple)] shadow-xl hover:scale-105 transition-transform duration-300">
             <div class="w-32 h-32 rounded-full bg-white flex items-center justify-center text-5xl border-4 border-white">
               🌸
             </div>
        </div>

        <h1 class="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyber-purple)] via-[#ff7eb3] to-[var(--color-cyber-purple)] animate-fade-in-up">
          RAKAWI DODO
        </h1>
        
        <div class="bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/60 mb-8 shadow-sm">
           <span class="text-lg md:text-2xl font-bold tracking-widest uppercase text-[var(--color-cyber-purple)]">
             Professional Otaku // Wibu Akut // Isekai Traveler
           </span>
        </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-8">
           <div class="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm backdrop-blur-md hover:shadow-lg transition-all cursor-default group">
              <h3 class="text-sm uppercase tracking-widest opacity-60">Weeb Level</h3>
              <p class="text-4xl font-black group-hover:text-[var(--color-cyber-purple)] transition-colors">OVER 9000</p>
           </div>
           <div class="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm backdrop-blur-md hover:shadow-lg transition-all cursor-default group">
              <h3 class="text-sm uppercase tracking-widest opacity-60">Anime Watched</h3>
              <p class="text-4xl font-black group-hover:text-[var(--color-cyber-purple)] transition-colors">700+</p>
           </div>
           <div class="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm backdrop-blur-md hover:shadow-lg transition-all cursor-default group">
              <h3 class="text-sm uppercase tracking-widest opacity-60">Manga Read</h3>
              <p class="text-4xl font-black group-hover:text-[var(--color-cyber-purple)] transition-colors">UNLIMITED</p>
           </div>
        </div>
      </section>

      <!-- Favorites Section -->
      <section class="py-20 px-4 bg-white/40 backdrop-blur-md">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-black text-center mb-16 text-[var(--color-cyber-purple)] flex items-center justify-center gap-4">
            <span class="text-2xl">★</span> WAIFU OF THE SEASON <span class="text-2xl">★</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="bg-white rounded-2xl p-4 shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-pink-100/50 relative overflow-hidden group">
               <div class="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TOP TIER</div>
               <div class="h-64 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-300 group-hover:scale-[1.02] transition-transform">
                 [IMAGE PLACEHOLDER]
               </div>
               <h3 class="text-xl font-bold text-[var(--color-cyber-purple)]">Megumin</h3>
               <p class="text-sm opacity-60">Konosuba</p>
               <div class="mt-4 flex gap-2">
                 <span class="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">Explosion</span>
                 <span class="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">Chuuni</span>
               </div>
            </div>

             <!-- Card 2 -->
             <div class="bg-white rounded-2xl p-4 shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-pink-100/50 relative overflow-hidden group">
               <div class="h-64 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-300 group-hover:scale-[1.02] transition-transform">
                 [IMAGE PLACEHOLDER]
               </div>
               <h3 class="text-xl font-bold text-[var(--color-cyber-purple)]">Rem</h3>
               <p class="text-sm opacity-60">Re:Zero</p>
               <div class="mt-4 flex gap-2">
                 <span class="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">Maid</span>
                 <span class="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">Loyal</span>
               </div>
            </div>

             <!-- Card 3 -->
             <div class="bg-white rounded-2xl p-4 shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-pink-100/50 relative overflow-hidden group">
               <div class="h-64 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-300 group-hover:scale-[1.02] transition-transform">
                 [IMAGE PLACEHOLDER]
               </div>
               <h3 class="text-xl font-bold text-[var(--color-cyber-purple)]">Makise Kurisu</h3>
               <p class="text-sm opacity-60">Steins;Gate</p>
               <div class="mt-4 flex gap-2">
                 <span class="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">Tsundere</span>
                 <span class="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">Scientist</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 text-center opacity-60 text-sm">
        <p>© 2025 Rakawi Dodo. Built with <span class="text-pink-500">♥</span> and Angular 21.</p>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HomeComponent { }
