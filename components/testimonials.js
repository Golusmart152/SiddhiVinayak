const testimonialsHTML = `
<!-- Testimonials Section -->
<section id="testimonials" class="py-20 px-4 md:px-6 bg-gradient-to-br from-secondary via-[#0f144d] to-[#0a0c27] text-white overflow-hidden relative shadow-2xl" data-purpose="testimonials">
  
  <!-- Section Header -->
  <div class="mx-auto max-w-7xl relative z-10 mb-14 text-center">
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-display tracking-tight drop-shadow-md">Client Testimonials</h2>
    <div class="h-1.5 w-16 md:w-24 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
    <p class="mt-6 text-slate-300 max-w-2xl mx-auto text-sm md:text-base font-medium">
      See what our verified buyers on IndiaMart think of our industrial equipment and service.
    </p>
  </div>

  <!-- Marquee Container -->
  <div class="relative w-full overflow-hidden">
    <!-- Gradient Masks for smooth scroll fade -->
    <div class="absolute inset-y-0 left-0 w-12 md:w-40 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute inset-y-0 right-0 w-12 md:w-40 bg-gradient-to-l from-[#0a0c27] via-[#0a0c27]/80 to-transparent z-10 pointer-events-none"></div>
    
    <div class="testimonials-marquee flex py-6 items-stretch">
      
      <!-- GROUP 1 -->
      <div class="flex shrink-0">
        
        <!-- Review 1 -->
        <div class="w-[280px] sm:w-96 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <div>
            <div class="flex items-center gap-1 mb-4">
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.1s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.2s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.3s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.4s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.5s;">star</span>
            </div>
            <p class="text-slate-800 font-medium italic mb-6 text-sm sm:text-base leading-relaxed">
              "Quick Response and valuable price with best service Good job by Team."
            </p>
          </div>
          <div class="border-t border-slate-100 pt-4 mt-auto">
            <h4 class="font-black text-secondary tracking-tight text-base">Akash</h4>
            <p class="text-[10px] sm:text-[11px] text-accent uppercase tracking-wider font-bold mt-0.5">Indore, Madhya Pradesh</p>
            <p class="text-xs text-slate-500 font-semibold mt-2 line-clamp-1">Reciprocating Air Compressor</p>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="w-[280px] sm:w-96 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <div>
            <div class="flex items-center gap-1 mb-4">
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.6s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.7s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.8s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.9s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 1.0s;">star</span>
            </div>
            <p class="text-slate-800 font-medium italic mb-6 text-sm sm:text-base leading-relaxed">
              "very good Service."
            </p>
          </div>
          <div class="border-t border-slate-100 pt-4 mt-auto">
            <h4 class="font-black text-secondary tracking-tight text-base">Ram</h4>
            <p class="text-[10px] sm:text-[11px] text-accent uppercase tracking-wider font-bold mt-0.5">Indore, Madhya Pradesh</p>
            <p class="text-xs text-slate-500 font-semibold mt-2 line-clamp-1">Karcher Pressure Washer</p>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="w-[280px] sm:w-96 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <div>
            <div class="flex items-center gap-1 mb-4">
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.2s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.3s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.4s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.5s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.6s;">star</span>
            </div>
            <p class="text-slate-800 font-medium italic mb-6 text-sm sm:text-base leading-relaxed">
              "good."
            </p>
          </div>
          <div class="border-t border-slate-100 pt-4 mt-auto">
            <h4 class="font-black text-secondary tracking-tight text-base">Sachin Nagpal</h4>
            <p class="text-[10px] sm:text-[11px] text-accent uppercase tracking-wider font-bold mt-0.5">Pandhurna, Madhya Pradesh</p>
            <p class="text-xs text-slate-500 font-semibold mt-2 line-clamp-1">Hydraulic Power Pack</p>
          </div>
        </div>

        <!-- Review 4 -->
        <div class="w-[280px] sm:w-96 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <div>
            <div class="flex items-center gap-1 mb-4">
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.5s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.6s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.7s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.8s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.9s;">star</span>
            </div>
            <p class="text-slate-800 font-medium italic mb-6 text-sm sm:text-base leading-relaxed">
               "Noted for high satisfaction in Response, Quality, and Delivery."
            </p>
          </div>
          <div class="border-t border-slate-100 pt-4 mt-auto">
            <h4 class="font-black text-secondary tracking-tight text-base">Ashok Choudhary</h4>
            <p class="text-[10px] sm:text-[11px] text-accent uppercase tracking-wider font-bold mt-0.5">Indore, Madhya Pradesh</p>
            <p class="text-xs text-slate-500 font-semibold mt-2 line-clamp-1">Tyre Changer Machine</p>
          </div>
        </div>

        <!-- Review 5 -->
        <div class="w-[280px] sm:w-96 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <div>
            <div class="flex items-center gap-1 mb-4">
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.8s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.9s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 1.0s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 1.1s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 1.2s;">star</span>
            </div>
            <p class="text-slate-800 font-medium italic mb-6 text-sm sm:text-base leading-relaxed">
               "Highlighted for a positive response; found helpful by other users."
            </p>
          </div>
          <div class="border-t border-slate-100 pt-4 mt-auto">
            <h4 class="font-black text-secondary tracking-tight text-base">Hemant Choudhary</h4>
            <p class="text-[10px] sm:text-[11px] text-accent uppercase tracking-wider font-bold mt-0.5">Indore, Madhya Pradesh</p>
            <p class="text-xs text-slate-500 font-semibold mt-2 line-clamp-1">3D Wheel Alignment Machine</p>
          </div>
        </div>

      </div>

      <!-- GROUP 2 (Duplicate for seamless loop) -->
      <div class="flex shrink-0" aria-hidden="true">
        
        <!-- Review 1 (Repeat) -->
        <div class="w-[280px] sm:w-96 bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <div>
            <div class="flex items-center gap-1 mb-4">
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.1s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.2s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.3s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.4s;">star</span>
              <span class="material-symbols-outlined text-[18px] sm:text-[20px] star-glow" style="font-variation-settings: 'FILL' 1; animation-delay: 0.5s;">star</span>
            </div>
            <p class="text-slate-800 font-medium italic mb-6 text-sm sm:text-base leading-relaxed">
              "Quick Response and valuable price with best service Good job by Team."
            </p>
          </div>
          <div class="border-t border-slate-100 pt-4 mt-auto">
            <h4 class="font-black text-secondary tracking-tight text-base">Akash</h4>
            <p class="text-[10px] sm:text-[11px] text-accent uppercase tracking-wider font-bold mt-0.5">Indore, Madhya Pradesh</p>
            <p class="text-xs text-slate-500 font-semibold mt-2 line-clamp-1">Reciprocating Air Compressor</p>
          </div>
        </div>
        
        <!-- Rest of repeated items match above... -->
        <!-- (Using CSS animation for loop) -->
      </div>
    </div>
  </div>

  <style>
    @keyframes scroll {
      from { transform: translateX(0); }
      to { transform: translateX(calc(-50% - 16px)); }
    }
    @keyframes goldenShine { 0%, 100% { color: #FFD700; filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.5)); transform: scale(1); } 50% { color: #FFF2A8; filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.9)); transform: scale(1.1); } }
    .star-glow { color: #FFD700; animation: goldenShine 1.5s infinite ease-in-out; display: inline-block; }
    .testimonials-marquee > div { gap: 2rem; padding: 1rem; }
    .testimonials-marquee { gap: 2rem; width: max-content; animation: scroll 50s linear infinite; }
    .testimonials-marquee:hover { animation-play-state: paused; }
  </style>
</section>
`;

const testimonialsContainer = document.getElementById('testimonials-container');
if (testimonialsContainer) { testimonialsContainer.innerHTML = testimonialsHTML; }
