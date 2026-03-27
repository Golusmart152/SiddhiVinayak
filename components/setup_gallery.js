const setupGalleryHTML = `
<!-- Setup Gallery Section -->
<section id="setup-gallery" class="py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
  <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
    <div class="space-y-2">
      <div class="flex items-center gap-2 text-secondary dark:text-primary font-bold uppercase tracking-wider text-sm">
        <span class="w-8 h-1 bg-primary"></span>
        Operational Excellence
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Setup Gallery</h2>
      <p class="text-slate-600 dark:text-slate-400 max-w-2xl">Explore our high-precision industrial installations and turnkey manufacturing setups engineered for peak performance.</p>
    </div>
    <div class="flex gap-2">
      <button class="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-secondary hover:text-white transition-colors">
        <span class="material-symbols-outlined">west</span>
      </button>
      <button class="p-2 rounded-full bg-secondary text-white hover:bg-slate-900 transition-colors">
        <span class="material-symbols-outlined">east</span>
      </button>
    </div>
  </div>

  <!-- Grid Layout for Setups -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <!-- Setup Item 1 -->
    <div class="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="aspect-square md:aspect-[4/3] overflow-hidden">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern CNC machining center in factory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL-wYid82CmWBZr9xY8g8QFGYw9XrpV4S6CN-xbpOjBWWDrTHgnyhj2UzVMCI8eCrr9yFl8Vtc9VSOA5geJ4oCqMqji0AzbyRv_oTFM5gZBPvFtYkNrklKK3y_4RL6pe0r5MQ5cJ0bkXO-yzaYQwmKGCIKSAWKQsOPh39adgqMj6h-zmJgTdS-xQ2lU2mwATqf2m-ToB99Zgd4ICXpNQAD1A2-o609vWjsh04HSj4Z_Mz1663YV1SkdEQ8tYcNOa8rrmzAiGAadTzC"/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80"></div>
      <div class="absolute bottom-0 left-0 p-6 w-full">
        <span class="text-primary text-xs font-bold uppercase tracking-widest">Precision</span>
        <h3 class="text-white text-lg font-bold mt-1">CNC Machining Unit</h3>
        <p class="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">High-speed multi-axis machining center for aerospace components.</p>
      </div>
    </div>
    <!-- Setup Item 2 -->
    <div class="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="aspect-square md:aspect-[4/3] overflow-hidden">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Automated assembly line with robotic arms" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEmC0Gd4bnz9TRjOxqBGEnOcg18u0bPS7vwACp07hEsVcJMF_72sS0chvdgd4q6wSkUuzAiXuXME4lPVZID037NW6zTNyjLmxEdsai8W1qU4q7G1wdmjE1tN65BgdgZIMsGtEaEebgljN0VPCHDR-s0p9Y2fu84VTuyHvN9tkYM_cfYXsGBZGEf10kO-rxbF3TfRaah-taJcIfw_MiOlcWYH64GD04mjAFObcki514Nt-HXHpMYSfjdBwUKNShS7z-vXlTRMkOqyFL"/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80"></div>
      <div class="absolute bottom-0 left-0 p-6 w-full">
        <span class="text-primary text-xs font-bold uppercase tracking-widest">Automation</span>
        <h3 class="text-white text-lg font-bold mt-1">Assembly Line Alpha</h3>
        <p class="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">Integrated robotic assembly line for electronics manufacturing.</p>
      </div>
    </div>
    <!-- Setup Item 3 -->
    <div class="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="aspect-square md:aspect-[4/3] overflow-hidden">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Heavy duty industrial hydraulic press" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbx5Rn2UPRFpmXD-UdzpX7YdJKAhSDoTQxy4hWwWvKYZtnmCQNgvEcSGhlh5JI9i3f7i1CuUwxrwrCZOCM0s2PbLzB90Ub24oLEX2VmuyFgRHMloruGVvLWVeBqIS7XKOuqXQlxTZm6gn5fMKWnaJS4IMOS01-6f-SmX5YCk8ZH133IXbpKMMc9TWuB-4Eje7kCj51h0k6f3glspc6SK0D9AUih0ZwlKuheTRX4iR5iHr2wDSkW72q_KzsucyqIZ-XAZbtca71MlGy"/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80"></div>
      <div class="absolute bottom-0 left-0 p-6 w-full">
        <span class="text-primary text-xs font-bold uppercase tracking-widest">Heavy Engineering</span>
        <h3 class="text-white text-lg font-bold mt-1">Hydraulic Press Bay</h3>
        <p class="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">Large scale 500-ton hydraulic forging and pressing facility.</p>
      </div>
    </div>
    <!-- Setup Item 4 -->
    <div class="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
      <div class="aspect-square md:aspect-[4/3] overflow-hidden">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Quality control testing equipment laboratory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc8ONh5bfaBFTfGF5_8eGSQARtkGbkd8fkZTyPLndefpdWtTY8nDsExHGYvtlaS-p1ZaCqsfrxsAPUmNAxP0zUrlV8Ys-VCb7H34dB8KRr1Y6X6AtzLgsUfgMsQPE5qpawmsS8S8f4dZGPThvMdzLG12oWyMR6rQ-1VCmOJ7chwo49ib4tYKT0qZTiGwh1fTzgKVjlBO7NA08wxnxikKXCAIgq5tNtn8BocZfkCimOb4yVKbb1NhuIKNkj8eZAKdgbaOHzy0wqf2t4"/>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80"></div>
      <div class="absolute bottom-0 left-0 p-6 w-full">
        <span class="text-primary text-xs font-bold uppercase tracking-widest">Quality</span>
        <h3 class="text-white text-lg font-bold mt-1">Inspection Lab</h3>
        <p class="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">Standardized quality control laboratory with CMM capabilities.</p>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('setup-gallery-container').innerHTML = setupGalleryHTML;
