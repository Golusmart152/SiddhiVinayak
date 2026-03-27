/* Portable Header Loader - Ensures fonts/icons are present globally */
(function() {
  const head = document.head;
  const linkId = 'ssve-global-fonts';
  if (!document.getElementById(linkId)) {
    const fonts = document.createElement('link');
    fonts.id = linkId;
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    head.appendChild(fonts);
  }
})();

const headerHTML = `
<style>
  /* Portable Header Styles */
  .nav-link { position: relative; transition: color 0.3s ease; }
  .nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background-color: #fbbf24; transition: width 0.3s ease; }
  .nav-link:hover::after { width: 100%; }
  
  /* Theme Toggle Icons */
  #theme-toggle { position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 9999px; background: rgba(0,0,0,0.05); transition: all 0.3s; padding: 0; outline: none; border: none; cursor: pointer; }
  .dark #theme-toggle { background: rgba(255,255,255,0.1); }
  #theme-toggle:hover { transform: scale(1.1); background: rgba(251,191,36,0.2); }
  #theme-toggle .icon-sun { display: block; color: #fbbf24; }
  #theme-toggle .icon-moon { display: none; color: #fbbf24; font-variation-settings: 'FILL' 1; }
  .dark #theme-toggle .icon-sun { display: none; }
  .dark #theme-toggle .icon-moon { display: block; }

  /* Side Drawer Animations */
  .drawer-open #mobile-drawer { transform: translateX(0); }
  .drawer-open #drawer-overlay { opacity: 1; pointer-events: auto; }
  
  /* Hide Floating Buttons when drawer open */
  .drawer-open .floating-contact-container { display: none !important; }

  /* Global Viewport Reset */
  html, body { overflow-x: hidden !important; width: 100% !important; margin: 0; padding: 0; position: relative; }
</style>

<!-- BEGIN: Site Header -->
<header class="w-full border-b border-white/5 dark:border-white/10 transition-colors duration-500 bg-gradient-to-br from-red-50/50 via-white to-yellow-50/50 dark:from-[#0b1120] dark:via-[#0b1120] dark:to-[#090e1a]" data-purpose="site-header">
  
  <!-- BEGIN: TopBar (Hidden on Mobile) -->
  <div class="hidden md:block bg-gradient-to-r from-secondary via-secondary/95 to-secondary text-white py-2 px-4 md:px-8 border-b border-white/10 overflow-x-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
      <div class="flex items-center space-x-6 mb-2 md:mb-0">
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
          <span class="font-medium">Call: ${window.getMobileOnly()}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
          <span class="font-medium underline decoration-primary/30">${window.getEmail()}</span>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <a aria-label="Facebook" class="hover:text-primary transition-all hover:scale-110" href="#"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.21c0-.83.19-1.29 1.17-1.29h2.83v-4.29l-4.41-.01c-4.35 0-5.59 2.32-5.59 5.41v2.39z"></path></svg></a>
        <a aria-label="Twitter" class="hover:text-primary transition-all hover:scale-110" href="#"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
        <a aria-label="LinkedIn" class="hover:text-primary transition-all hover:scale-110" href="#"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></a>
      </div>
    </div>
  </div>

  <!-- BEGIN: MainNav -->
  <nav class="shadow-xl bg-gradient-to-r from-red-50/80 via-white to-yellow-50/80 dark:from-[#0b1120] dark:via-[#0b1120] dark:to-[#0b1120] backdrop-blur-md sticky top-0 lg:static z-50 transition-colors duration-500 overflow-x-hidden" data-purpose="navigation-bar">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo Section -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <!-- Real Company Logo (transparent PNG) -->
          <div class="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0">
            <img 
              src="images/Logo/ssve_pages-to-jpg-0001-removebg-preview.png" 
              alt="SSV Enterprises Logo"
              class="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <div class="flex flex-col leading-tight min-w-0">
            <span class="text-[11px] sm:text-base md:text-lg font-black tracking-tight uppercase truncate"
                  style="background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.04em;">
              Shri Siddhivinayak
            </span>
            <span class="text-[8px] md:text-[14px] font-black tracking-[0.15em] sm:tracking-[0.3em] uppercase text-[#1a227f] dark:text-white/90">
              Enterprises
            </span>
          </div>
        </div>

        <!-- Desktop Navigation Menu -->
        <div class="hidden lg:flex items-center space-x-6 text-sm">
          <a class="nav-link text-slate-700 dark:text-white font-semibold hover:text-primary transition-colors" href="index.html">Home</a>
          <a class="nav-link text-slate-700 dark:text-white font-semibold hover:text-primary transition-colors" href="products.html">Products</a>
          <a class="nav-link text-slate-700 dark:text-white font-semibold hover:text-primary transition-colors" href="index.html#about">About Us</a>
          <a class="nav-link text-slate-700 dark:text-white font-semibold hover:text-primary transition-colors" href="index.html#awards">Certificates</a>
          <a class="nav-link text-slate-700 dark:text-white font-semibold hover:text-primary transition-colors" href="index.html#setup-gallery">Gallery</a>
          <a class="nav-link text-slate-700 dark:text-white font-semibold hover:text-primary transition-colors" href="index.html#infrastructure">Infrastructure</a>
          <a class="nav-link text-slate-700 dark:text-white font-semibold hover:text-primary transition-colors" href="index.html#contact">Contact Us</a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block shrink-0 ml-4">
          <a href="https://www.indiamart.com/shrisiddhivinayakentp/" target="_blank" rel="noopener noreferrer" class="relative overflow-hidden bg-secondary hover:bg-secondary/80 text-white font-bold py-2.5 px-6 rounded-[8px] transition-all duration-300 shadow-lg flex items-center gap-2 text-sm whitespace-nowrap group">
            <span class="absolute inset-0 w-full h-full pointer-events-none" style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%); transform: translateX(-100%); transition: transform 0.5s ease;" onmouseenter="this.style.transform='translateX(100%)'" onmouseleave="this.style.transform='translateX(-100%)'"></span>
            <span class="relative z-10">Check On IndiaMART</span>
            <svg class="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </a>
        </div>

        <!-- Right Utils -->
        <div class="flex items-center gap-3">
          <!-- Dark Mode Toggle -->
          <button id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark/light mode">
            <span class="material-symbols-outlined icon-sun">light_mode</span>
            <span class="material-symbols-outlined icon-moon">dark_mode</span>
          </button>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button class="text-primary p-2" id="mobile-menu-btn">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16m-7 6h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- MOBILE SLIDE PANEL (DRAWER) -->
  <div id="drawer-container" class="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
    <!-- Overlay -->
    <div id="drawer-overlay" class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-none"></div>
    
    <!-- Panel -->
    <div id="mobile-drawer" class="absolute top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white dark:bg-slate-950 shadow-2xl transform translate-x-full transition-transform duration-500 pointer-events-auto flex flex-col border-l border-white/10">
      
      <!-- Drawer Header -->
      <div class="p-6 border-b border-slate-100 dark:border-white/5 bg-gradient-to-br from-red-50/20 via-white to-yellow-50/20 dark:from-secondary/10 dark:to-transparent">
        <div class="flex items-center justify-between mb-8">
           <div class="flex flex-col">
              <span class="text-sm font-black text-primary uppercase tracking-widest mb-1">Navigation</span>
              <div class="w-8 h-1 bg-primary rounded-full"></div>
           </div>
           <button id="close-drawer-btn" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white active:scale-95 transition-transform">
             <span class="material-symbols-outlined">close</span>
           </button>
        </div>
        
        <!-- Drawer Logo Area (Matches Desktop) -->
        <div class="flex items-center gap-3">
           <img src="images/Logo/ssve_pages-to-jpg-0001-removebg-preview.png" class="w-10 h-10 object-contain drop-shadow-md"/>
         <div class="flex flex-col leading-tight">
           <span class="text-sm font-black uppercase tracking-tight"
                 style="background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.04em;">
             Shri Siddhivinayak
           </span>
           <span class="text-[9px] font-black uppercase tracking-[0.3em] text-[#1a227f] dark:text-white/80">
             Enterprises
           </span>
         </div>
        </div>
      </div>

      <!-- Drawer Links -->
      <nav class="flex-grow overflow-y-auto p-6 space-y-2 no-scrollbar">
        <a href="index.html" class="flex items-center gap-4 p-4 rounded-xl text-slate-700 dark:text-white/80 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary transition-all font-bold">
          <span class="material-symbols-outlined text-primary/70">home</span> Home
        </a>
        <a href="products.html" class="flex items-center gap-4 p-4 rounded-xl text-slate-700 dark:text-white/80 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary transition-all font-bold">
          <span class="material-symbols-outlined text-primary/70">category</span> All Products
        </a>
        <a href="index.html#about" class="flex items-center gap-4 p-4 rounded-xl text-slate-700 dark:text-white/80 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary transition-all font-bold">
          <span class="material-symbols-outlined text-primary/70">business</span> About Us
        </a>
        <a href="index.html#awards" class="flex items-center gap-4 p-4 rounded-xl text-slate-700 dark:text-white/80 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary transition-all font-bold">
          <span class="material-symbols-outlined text-primary/70">military_tech</span> Certificates
        </a>
        <a href="index.html#setup-gallery" class="flex items-center gap-4 p-4 rounded-xl text-slate-700 dark:text-white/80 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary transition-all font-bold">
          <span class="material-symbols-outlined text-primary/70">gallery_thumbnail</span> Gallery
        </a>
        <a href="index.html#contact" class="flex items-center gap-4 p-4 rounded-xl text-slate-700 dark:text-white/80 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-primary transition-all font-bold">
          <span class="material-symbols-outlined text-primary/70">mail</span> Contact Us
        </a>
        
        <div class="pt-6">
          <a href="https://www.indiamart.com/shrisiddhivinayakentp/" target="_blank" class="w-full bg-secondary text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest shadow-xl">
             <span class="material-symbols-outlined">shopping_cart</span> Check IndiaMART
          </a>
        </div>
      </nav>

      <!-- Drawer Footer (Contact Info) -->
      <div class="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20">
        <div class="flex flex-col gap-3">
           <a href="tel:${window.getTelNumber()}" class="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400">
             <span class="material-symbols-outlined text-primary">call</span> ${window.getMobileOnly()}
           </a>
           <a href="mailto:${window.getEmail()}" class="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400">
             <span class="material-symbols-outlined text-primary">mail</span> ${window.getEmail()}
           </a>
        </div>
      </div>

    </div>
  </div>

</header>
<!-- END: Site Header -->
`;

document.getElementById('header-container').innerHTML = headerHTML;

// ── Drawer & Theme Control Logic ──
setTimeout(() => {
  const body = document.body;
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const overlay = document.getElementById('drawer-overlay');
  
  // Toggle Drawer
  const toggleDrawer = (open) => {
    if (open) body.classList.add('drawer-open');
    else body.classList.remove('drawer-open');
  };

  if (menuBtn) menuBtn.addEventListener('click', () => toggleDrawer(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleDrawer(false));
  if (overlay) overlay.addEventListener('click', () => toggleDrawer(false));

  // Close drawer on link click
  document.querySelectorAll('#mobile-drawer a').forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}, 0);
