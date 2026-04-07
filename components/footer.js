const footerHTML = `
<!-- Site Footer -->
<footer class="bg-secondary text-white py-16 px-6 border-t-[6px] border-primary" data-purpose="site-footer">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
      
      <!-- Brand & About -->
      <div class="space-y-6">
        <div class="flex items-center gap-3 shrink-0">
          <!-- Real Company Logo (transparent PNG) -->
          <div class="relative w-12 h-12 flex items-center justify-center shrink-0">
            <img 
              src="images/Logo/ssve_pages-to-jpg-0001-removebg-preview.png" 
              alt="SSV Enterprises Logo"
              class="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-base md:text-lg font-black tracking-tight uppercase truncate"
                  style="background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: 0.04em;">
              Shri Siddhivinayak&trade;
            </span>
            <span class="text-[11px] md:text-[14px] font-black tracking-[0.3em] uppercase text-white/90">
              Enterprises
            </span>
          </div>
        </div>
        <p class="text-sm leading-relaxed text-white/80">
          Serving the nation's most critical infrastructure needs with premium industrial components, high-precision manufacturing setups, and strategic logistics.
        </p>
        <div class="flex gap-4">
          <a aria-label="Find us on Web" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all" href="#"><span class="material-symbols-outlined text-sm">public</span></a>
          <a aria-label="Email Us" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all" href="#"><span class="material-symbols-outlined text-sm">alternate_email</span></a>
          <a aria-label="Share our Page" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all" href="#"><span class="material-symbols-outlined text-sm">share</span></a>
        </div>
      </div>

      <!-- Our Products -->
      <div>
        <h3 class="text-white text-lg font-bold mb-6 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary"></span> Our Products
        </h3>
        <ul class="space-y-4 text-sm font-medium">
          <li><a href="products.html#category-air-compressors" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>Air Compressors</a></li>
          <li><a href="products.html#category-high-pressure-washers" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>High Pressure Washers</a></li>
          <li><a href="products.html#category-scissor-lifts" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>Hydraulic &amp; Scissor Lifts</a></li>
          <li><a href="products.html#category-wheel-alignment" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>Wheel Alignment Machines</a></li>
          <li><a href="products.html#category-tyre-changers" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>Tyre Changers</a></li>
          <li><a href="products.html#category-vacuum-cleaners" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>Wet &amp; Dry Vacuum Cleaners</a></li>
          <li><a href="products.html#category-engine-diagnostic" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>Engine Diagnostic Tools</a></li>
          <li><a href="products.html#category-nitrogen-flushing" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span>Nitrogen Tyre Inflators</a></li>
          <li><a href="products.html" class="hover:text-primary transition-colors flex items-center gap-2 text-primary font-semibold"><span class="material-symbols-outlined text-[14px]">open_in_new</span>View All Products →</a></li>
        </ul>
      </div>

      <!-- Company Navigation -->
      <div>
        <h3 class="text-white text-lg font-bold mb-6 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-accent"></span> Company
        </h3>
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8 text-sm font-medium">
          <li><a href="index.html#hero-main-section" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Home</a></li>
          <li><a href="index.html#about" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> About Us</a></li>
          <li><a href="index.html#founder" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Founder & Vision</a></li>
          <li><a href="index.html#partners" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Premium Partners</a></li>
          <li><a href="index.html#setup-gallery" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Setup Gallery</a></li>
          <li><a href="index.html#infrastructure" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Office Infrastructure</a></li>
          <li><a href="index.html#awards" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Awards & Certs</a></li>
          <li><a href="index.html#testimonials" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Client Reviews</a></li>
          <li><a href="index.html#contact" class="text-white/90 hover:text-primary transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-[14px]">chevron_right</span> Contact Us</a></li>
        </ul>
      </div>

      <!-- Contact Details -->
      <div>
        <h3 class="text-white text-lg font-bold mb-6 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-secondary"></span> Head Office
        </h3>
        <ul class="space-y-4 text-sm text-white/80">
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary mt-0.5 text-lg shrink-0">location_on</span>
            <span class="leading-relaxed text-white">${window.getFormattedAddress()}</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-lg shrink-0">smartphone</span>
            <a href="tel:${window.getTelNumber()}" class="hover:text-primary transition-colors text-white">Mobile: ${window.getMobileOnly()}</a>
          </li>
          <li class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-lg shrink-0">call</span>
            <a href="tel:${window.getLandlineTelNumber()}" class="hover:text-primary transition-colors text-white">Office: ${window.getLandline()}</a>
          </li>
          <li class="flex items-center gap-3">
            <span class="material-symbols-outlined text-primary text-lg shrink-0">mail</span>
            <a href="mailto:${window.getEmail()}" class="hover:text-primary transition-colors text-white">${window.getEmail()}</a>
          </li>
        </ul>
      </div>
      
    </div>

    <!-- Copyright Bar -->
    <div class="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-semibold text-white/50 uppercase tracking-wider text-center">
      <p>&copy; 2026 Shri Siddhivinayak&trade; Enterprises. All Rights Reserved.</p>
    </div>
  </div>
</footer>
`;

document.getElementById('footer-container').innerHTML = footerHTML;
