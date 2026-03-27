const awardsHTML = `
<!-- Awards & Certifications Section -->
<section id="awards" class="py-24 px-6 max-w-7xl mx-auto">
  <div class="text-center mb-16">
    <div class="flex items-center justify-center gap-2 text-secondary dark:text-primary mb-4">
      <span class="material-symbols-outlined text-4xl">workspace_premium</span>
    </div>
    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">Awards & Certifications</h2>
    <div class="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
    <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
      Recognized industry-wide for our commitment to quality, safety, and manufacturing excellence.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <!-- Certificate 1 -->
    <div class="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500">
      <div class="aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://placehold.co/600x800/f8f6f6/1a227f?text=ISO+9001\nCertification" alt="ISO 9001 Certification"/>
      </div>
      <div class="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
        <span class="material-symbols-outlined text-primary text-5xl mb-4 drop-shadow-lg">verified</span>
        <h3 class="text-white font-bold text-xl mb-2">ISO 9001:2015</h3>
        <p class="text-slate-300 text-sm leading-relaxed">Quality Management Systems Certified for advanced manufacturing.</p>
      </div>
    </div>

    <!-- Award 2 -->
    <div class="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500">
      <div class="aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://placehold.co/600x800/f8f6f6/1a227f?text=Safety\nExcellence" alt="Safety Excellence Award"/>
      </div>
      <div class="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
        <span class="material-symbols-outlined text-primary text-5xl mb-4 drop-shadow-lg">health_and_safety</span>
        <h3 class="text-white font-bold text-xl mb-2">National Safety Award</h3>
        <p class="text-slate-300 text-sm leading-relaxed">Recognized for maintaining zero workplace incidents for 5 consecutive years.</p>
      </div>
    </div>

    <!-- Award 3 -->
    <div class="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500">
      <div class="aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://placehold.co/600x800/f8f6f6/1a227f?text=Innovation\nAward" alt="Innovation Award"/>
      </div>
      <div class="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
        <span class="material-symbols-outlined text-primary text-5xl mb-4 drop-shadow-lg">emoji_objects</span>
        <h3 class="text-white font-bold text-xl mb-2">Innovation Index</h3>
        <p class="text-slate-300 text-sm leading-relaxed">Pioneering smart manufacturing and seamless logistics integration.</p>
      </div>
    </div>

    <!-- Award 4 -->
    <div class="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500">
      <div class="aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://placehold.co/600x800/f8f6f6/1a227f?text=Best\nSupplier" alt="Best Supplier Award"/>
      </div>
      <div class="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
        <span class="material-symbols-outlined text-primary text-5xl mb-4 drop-shadow-lg">military_tech</span>
        <h3 class="text-white font-bold text-xl mb-2">Top Supplier 2023</h3>
        <p class="text-slate-300 text-sm leading-relaxed">Voted Top Tier Industrial Supplier by Global Engineering Contractors.</p>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('awards-container').innerHTML = awardsHTML;
