const heroHTML = `
<!-- BEGIN: Adaptive Industrial Hero Section -->
<section id="hero-main-section" 
         class="relative w-full min-h-[auto] md:min-h-screen flex items-center overflow-x-hidden pt-28 pb-32 md:py-24 transition-colors duration-500 bg-gradient-to-br from-red-50/50 via-white to-yellow-50/50 dark:from-[#0b1120] dark:via-[#0b1120] dark:to-[#090e1a]">

  <style>
    @keyframes heroShine {
      0% { transform: translateX(-150%) skewX(-12deg); }
      35% { transform: translateX(150%) skewX(-12deg); }
      100% { transform: translateX(150%) skewX(-12deg); }
    }
  </style>

  <!-- BEGIN: Re-established Adaptive Atmospheric Glows -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
    <div class="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-30 blur-[120px]" 
         style="background: radial-gradient(circle, #1a227f 0%, transparent 70%);"></div>
    <div class="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-20 blur-[100px]" 
         style="background: radial-gradient(circle, #D92323 0%, transparent 70%);"></div>
    <div class="absolute top-1/4 -left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.05] dark:opacity-10 blur-[80px]" 
         style="background: radial-gradient(circle, #FFD700 0%, transparent 70%);"></div>
  </div>

  <!-- Industrial Floating Icons (Subtle Background Detail) -->
  <div class="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-40 dark:opacity-60 hidden md:block">
    <div class="absolute top-[10%] right-[45%] animate-float"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="stroke-[#991b1b]" stroke-width="3"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
    <div class="absolute top-[25%] right-[22%] animate-float-delay"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" class="stroke-[#b45309]" stroke-width="2.5"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center mt-4 md:mt-10">
    
    <!-- Branding Section (Logo + Company Name) - Now Centered at Top -->
    <div class="w-full flex flex-col items-center justify-center relative group mb-8 md:mb-12">
       <div class="relative w-44 h-44 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center rounded-full pointer-events-none">
        <!-- Re-established Logo Aurora with Pulsing Glow -->
        <div class="absolute inset-x-0 inset-y-0 bg-[#D92323]/20 mix-blend-screen rounded-full blur-[60px] md:blur-[80px] group-hover:bg-[#D92323]/35 animate-pulse transition-all duration-700 pointer-events-none"></div>
        <div class="absolute inset-x-12 inset-y-12 bg-[#FFD700]/15 mix-blend-screen rounded-full blur-[40px] md:blur-[60px] animate-pulse delay-700 pointer-events-none"></div>
        
        <!-- Logo Image -->
        <div class="relative z-20 w-40 h-40 xs:w-52 xs:h-52 sm:w-60 sm:h-60 lg:w-96 lg:h-96 flex items-center justify-center p-2 transform group-hover:scale-105 transition-all duration-700">
           <img src="images/Logo/ssve_pages-to-jpg-0001-removebg-preview.png" 
                alt="Shri Siddhivinayak Enterprises Logo" 
                class="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(217,35,35,0.4)] md:drop-shadow-[0_0_50px_rgba(217,35,35,0.4)]" />
           <!-- Trademark Badge Overlay -->
           <div class="absolute bg-primary text-secondary font-black rounded-full shadow-lg border-2 border-secondary flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500 pointer-events-none z-30" 
                style="top: 24px; right: -24px; width: 36px; height: 36px; font-size: 15px; line-height: 1;">TM</div>
        </div>
      </div>
      
      <div class="mt-4 text-center group/title">
        <h1 class="flex flex-col items-center leading-tight">
          <span class="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight uppercase"
                style="background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.04em;">
            Shri Siddhivinayak&trade;
          </span>
          <span class="text-[14px] xs:text-base sm:text-2xl md:text-3xl font-black tracking-[0.25em] sm:tracking-[0.4em] uppercase text-[#1a227f] dark:text-white/90 mt-2">
            Enterprises
          </span>
        </h1>
      </div>
    </div>

    <!-- Identity Stats - Now below Company Name -->
    <div class="flex flex-wrap justify-center gap-6 xs:gap-10 md:gap-16 pb-12 w-full">
      <div class="text-center">
        <span class="block text-secondary dark:text-primary text-2xl xs:text-3xl md:text-5xl font-black mb-1">14+</span>
        <span class="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs uppercase font-bold tracking-widest">Experience</span>
      </div>
      <div class="text-center">
        <span class="block text-slate-900 dark:text-white text-2xl xs:text-3xl md:text-5xl font-black mb-1">500+</span>
        <span class="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs uppercase font-bold tracking-widest">Clients</span>
      </div>
      <div class="text-center">
        <span class="block text-slate-900 dark:text-white text-2xl xs:text-3xl md:text-5xl font-black mb-1 opacity-80">10K+</span>
        <span class="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs uppercase font-bold tracking-widest">Delivered</span>
      </div>
    </div>

    <!-- Buttons - Now Centered at Bottom -->
    <div class="flex flex-col sm:flex-row justify-center gap-5 w-full relative z-50">
      <a href="products.html" class="inline-flex w-full sm:w-64 h-14 items-center justify-center gap-4 bg-primary hover:bg-yellow-400 text-secondary font-black px-10 rounded-xl transition-all duration-300 text-[15px] uppercase tracking-widest shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:-translate-y-1 relative group overflow-hidden">
        <span class="relative z-10">Explore Catalog</span>
        <span class="material-symbols-outlined text-xl relative z-10 transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span>
        <div class="absolute top-0 -inset-full h-full w-[200%] transform -skew-x-12 opacity-60 bg-gradient-to-r from-transparent via-white to-transparent animate-[heroShine_3s_infinite_linear] pointer-events-none"></div>
      </a>
      
      <a href="#contact" class="inline-flex w-full sm:w-64 h-14 items-center justify-center gap-4 bg-[#D92323] hover:bg-red-700 text-white font-bold px-10 rounded-xl transition-all duration-300 text-[15px] uppercase tracking-widest shadow-lg hover:-translate-y-1 group">
        <span>Get in Touch</span>
        <span class="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">support_agent</span>
      </a>
    </div>

  </div>
</section>
`;

document.getElementById('hero-container').innerHTML = heroHTML;
