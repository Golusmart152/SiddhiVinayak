const distributorsHTML = `
<style>
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 30s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
  @media (max-width: 640px) {
    .animate-marquee { animation-duration: 20s; }
  }
</style>

<!-- BEGIN: Distributors Section -->
<section id="partners" class="bg-white dark:bg-slate-900 py-6 sm:py-10 lg:py-16 border-y border-slate-100 dark:border-slate-800 overflow-hidden" data-purpose="distributors-section">
  <div class="max-w-7xl mx-auto px-4 overflow-x-hidden">
    <div class="text-center mb-10 flex flex-col items-center">
      <div class="flex items-center gap-2 mb-3 text-secondary dark:text-primary">
        <span class="material-symbols-outlined text-2xl">workspace_premium</span>
        <span class="text-sm font-bold uppercase tracking-widest">Premium Partners</span>
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Authorized Distributor Of</h2>
      <div class="w-16 h-1 bg-primary rounded-full mt-4"></div>
    </div>
    
    <!-- Seamless Marquee Logo Grid -->
    <div class="relative overflow-hidden group">
      <!-- Gradient masks for smooth fade effect at edges -->
      <div class="absolute left-0 top-0 z-10 w-16 md:w-32 h-full bg-gradient-to-r from-white dark:from-slate-900 to-transparent pointer-events-none"></div>
      <div class="absolute right-0 top-0 z-10 w-16 md:w-32 h-full bg-gradient-to-l from-white dark:from-slate-900 to-transparent pointer-events-none"></div>
      
      <div class="animate-marquee items-center gap-12 sm:gap-20 px-8">
        <!-- 1. KÄRCHER SVG -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="150" height="40" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="25" font-family="Arial Black, Helvetica, sans-serif" font-size="28" font-weight="900" class="fill-slate-900 dark:fill-white">KÄRCHER</text>
            <rect x="0" y="32" width="150" height="6" fill="#FFF023" />
          </svg>
        </div>
        
        <!-- 2. WÜRTH SVG -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="160" height="40" viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="4" height="30" fill="#CC0000" />
            <rect x="14" y="5" width="4" height="30" fill="#CC0000" />
            <text x="25" y="30" font-family="Arial Black, Helvetica, sans-serif" font-size="24" font-weight="900" class="fill-slate-900 dark:fill-white">WURTH</text>
          </svg>
        </div>
        
        <!-- 3. TORK ON SVG -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="140" height="50" viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q 70 -5, 140 10 L 140 45 L 0 45 Z" fill="#1a227f" />
            <text x="70" y="35" font-family="Arial Black, sans-serif" font-size="18" fill="white" font-weight="bold" text-anchor="middle">TORK ON</text>
          </svg>
        </div>
        
        <!-- 4. PROTECH (Custom Recreated SVG) -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
            <!-- Red Pill Shape -->
            <rect x="10" y="5" width="180" height="40" rx="20" fill="#ce1126" />
            <!-- Rivet Dots -->
            <circle cx="22" cy="25" r="2.5" fill="white" />
            <circle cx="178" cy="25" r="2.5" fill="white" />
            <!-- Main Text -->
            <text x="100" y="32" font-family="'Times New Roman', serif" font-size="28" font-weight="900" font-style="italic" fill="white" text-anchor="middle">PROTECH</text>
          </svg>
        </div>
        
        <!-- 5. APPLE ENERGY -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <img src="images/apple-energy-logo2-DexLqfxy.png" alt="Apple Energy" class="h-10 md:h-12 w-auto object-contain" />
        </div>
        
        <!-- 6. MARUTI -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="25" font-family="Arial Black, sans-serif" font-size="22" fill="#ce1126" skewX="-10">MARUTI</text>
            <rect x="100" y="5" width="2" height="30" fill="#003893" />
            <text x="105" y="20" font-family="Impact, sans-serif" font-size="12" fill="#003893">AUTO</text>
            <text x="105" y="32" font-family="Arial, sans-serif" font-size="10" class="fill-slate-800 dark:fill-white" font-weight="bold">EQUIPMENT</text>
          </svg>
        </div>

        <!-- DUPLICATE FOR LOOP -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="150" height="40" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="25" font-family="Arial Black, Helvetica, sans-serif" font-size="28" font-weight="900" class="fill-slate-900 dark:fill-white">KÄRCHER</text>
            <rect x="0" y="32" width="150" height="6" fill="#FFF023" />
          </svg>
        </div>
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="160" height="40" viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="4" height="30" fill="#CC0000" />
            <rect x="14" y="5" width="4" height="30" fill="#CC0000" />
            <text x="25" y="30" font-family="Arial Black, Helvetica, sans-serif" font-size="24" font-weight="900" class="fill-slate-900 dark:fill-white">WURTH</text>
          </svg>
        </div>
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="140" height="50" viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q 70 -5, 140 10 L 140 45 L 0 45 Z" fill="#1a227f" />
            <text x="70" y="35" font-family="Arial Black, sans-serif" font-size="18" fill="white" font-weight="bold" text-anchor="middle">TORK ON</text>
          </svg>
        </div>
        <!-- 4. PROTECH (Custom Recreated SVG) -->
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
            <!-- Red Pill Shape -->
            <rect x="10" y="5" width="180" height="40" rx="20" fill="#ce1126" />
            <!-- Rivet Dots -->
            <circle cx="22" cy="25" r="2.5" fill="white" />
            <circle cx="178" cy="25" r="2.5" fill="white" />
            <!-- Main Text -->
            <text x="100" y="32" font-family="'Times New Roman', serif" font-size="28" font-weight="900" font-style="italic" fill="white" text-anchor="middle">PROTECH</text>
          </svg>
        </div>
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <img src="images/apple-energy-logo2-DexLqfxy.png" alt="Apple Energy" class="h-10 md:h-12 w-auto object-contain" />
        </div>
        <div class="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
          <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="25" font-family="Arial Black, sans-serif" font-size="22" fill="#ce1126" skewX="-10">MARUTI</text>
            <rect x="100" y="5" width="2" height="30" fill="#003893" />
            <text x="105" y="20" font-family="Impact, sans-serif" font-size="12" fill="#003893">AUTO</text>
            <text x="105" y="32" font-family="Arial, sans-serif" font-size="10" class="fill-slate-800 dark:fill-white" font-weight="bold">EQUIPMENT</text>
          </svg>
        </div>

      </div>
    </div>
  </div>
</section>
<!-- END: Distributors Section -->
`;

document.getElementById('distributors-container').innerHTML = distributorsHTML;
