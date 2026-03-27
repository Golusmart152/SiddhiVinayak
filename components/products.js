const categoriesData = [
  { id: "air-compressors", name: "Air Compressors", type: "garage" },
  { id: "high-pressure-washers", name: "High Pressure Washers", type: "cleaning" },
  { id: "hydraulic-power-packs", name: "Hydraulic Power Packs", type: "garage" },
  { id: "wheelers-hydraulic-lifts", name: "Hydraulic Lifts", type: "garage" },
  { id: "vacuum-cleaners", name: "Wet & Dry Vacuum Cleaners", type: "cleaning" },
  { id: "wheel-alignment", name: "Wheel Alignment Machines", type: "garage" },
  { id: "tyre-changers", name: "Tyre Changers", type: "garage" },
  { id: "pneumatic-tools", name: "Pneumatic Tools", type: "pneumatic" },
  { id: "pressure-gauges", name: "Pressure Gauges", type: "pneumatic" },
  { id: "pu-recoil-hoses", name: "PU Recoil Hoses", type: "pneumatic" },
  { id: "battery-chargers", name: "Battery Chargers", type: "garage" },
  { id: "digital-multimeters", name: "Digital Multimeters", type: "garage" },
  { id: "special-tools", name: "Special Tools Kits", type: "garage" },
  { id: "tool-trolleys", name: "Tool Trolleys", type: "garage" },
  { id: "parts-washers", name: "Parts Cleaner", type: "cleaning", desc: "Precision-engineered cleaning systems for effective grease and carbon removal from industrial components." },
  { id: "work-benches", name: "General Work Benches", type: "garage" },
  { id: "nitrogen-flushing", name: "Nitrogen Machine", type: "garage" }
];

const typographyMap = {
  "garage": "Garage Equipment",
  "cleaning": "Washing & Cleaning",
  "pneumatic": "Pneumatic Tools"
}

const productCardsHTML = categoriesData.map((cat, i) => {
  // Use local high-quality images generated for each category
  const bgImg = `images/categories/${cat.id}.png`;
  
  return `
    <div class="product-card group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800" data-category="${cat.type}">
      <div class="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
        <div class="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" style="background-image: url('${bgImg}');"></div>
        <div class="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div class="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md opacity-90">
          ${typographyMap[cat.type]}
        </div>
      </div>
      <div class="p-6 flex flex-col grow">
        <div class="mb-4">
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 truncate">${cat.name}</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">${cat.desc || `Complete range of high-quality ${cat.name.toLowerCase()} for advanced garage and industrial applications.`}</p>
        </div>
        <div class="mt-auto flex flex-col gap-3">
          <a href="products.html#category-${cat.id}" class="relative overflow-hidden block text-center w-full bg-slate-100 dark:bg-primary hover:bg-primary dark:hover:bg-yellow-400 hover:text-secondary dark:text-secondary text-slate-700 font-bold py-3 rounded-[8px] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(255,215,0,0.35)] hover:-translate-y-0.5 group">
            <span class="absolute inset-0 w-full h-full pointer-events-none" style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%); transform: translateX(-100%); transition: transform 0.5s ease;" onmouseenter="this.style.transform='translateX(100%)'" onmouseleave="this.style.transform='translateX(-100%)'" ></span>
            <span class="relative z-10">View Range</span>
          </a>
        </div>
      </div>
    </div>
  `;
}).join("");

const productsHTML = `
<!-- BEGIN: Products Section -->
<section id="products" class="bg-background-light dark:bg-background-dark py-12 lg:py-20" data-purpose="products-section">
  <div class="max-w-7xl mx-auto px-4">
    <!-- Section Header -->
    <div class="mb-12 flex flex-col gap-6">
      <div class="max-w-2xl">
        <div class="flex items-center gap-2 mb-4 text-secondary dark:text-primary">
          <span class="material-symbols-outlined text-3xl">precision_manufacturing</span>
          <span class="text-sm font-bold uppercase tracking-widest">Industrial Excellence</span>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Our Featured <span class="text-secondary dark:text-primary">Categories</span>
        </h1>
        <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          Premium grade components and heavy machinery designed for durability and performance in the most demanding environments.
        </p>
      </div>
    </div>

    <!-- Category Tabs - Stacked on Mobile, Row on Desktop -->
    <div class="flex flex-col sm:flex-row gap-3 mb-10">
      <button data-filter="all" class="filter-btn active flex h-12 w-full sm:w-auto items-center justify-center gap-x-2 rounded-xl bg-secondary text-white px-6 font-semibold shadow-lg shadow-secondary/20 transition-all border-transparent">
        <span class="material-symbols-outlined text-lg">apps</span>
        <span>All Categories</span>
      </button>
      <button data-filter="cleaning" class="filter-btn flex h-12 w-full sm:w-auto items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 px-6 font-semibold text-slate-700 dark:text-slate-300 hover:border-primary transition-all">
        <span class="material-symbols-outlined text-lg">local_car_wash</span>
        <span>Washing & Cleaning</span>
      </button>
      <button data-filter="garage" class="filter-btn flex h-12 w-full sm:w-auto items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 px-6 font-semibold text-slate-700 dark:text-slate-300 hover:border-primary transition-all">
        <span class="material-symbols-outlined text-lg">car_repair</span>
        <span>Garage Equipment</span>
      </button>
      <button data-filter="pneumatic" class="filter-btn flex h-12 w-full sm:w-auto items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 px-6 font-semibold text-slate-700 dark:text-slate-300 hover:border-primary transition-all">
        <span class="material-symbols-outlined text-lg">hardware</span>
        <span>Pneumatic Tools</span>
      </button>
    </div>

    <!-- Product Grid (Dynamic) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="productGridContainer">
      ${productCardsHTML}
    </div>

    <!-- Global Product Actions (Moved to bottom) -->
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
      <a href="products.html" class="relative overflow-hidden flex h-12 w-full sm:w-auto items-center justify-center gap-x-2 rounded-[8px] bg-primary text-secondary px-8 font-bold hover:bg-yellow-400 transition-all duration-300 shadow-md group">
        <!-- Shimmer shine sweep -->
        <span class="absolute inset-0 w-full h-full pointer-events-none" style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%); transform: translateX(-100%); transition: transform 0.5s ease;" onmouseenter="this.style.transform='translateX(100%)'" onmouseleave="this.style.transform='translateX(-100%)'"></span>
        <span class="material-symbols-outlined text-lg relative z-10">inventory_2</span>
        <span class="relative z-10">View All Products</span>
      </a>
      <a href="https://www.indiamart.com/shrisiddhivinayakentp/pneumatic-gun-panel-board.html" target="_blank" class="relative overflow-hidden flex h-12 w-full sm:w-auto items-center justify-center gap-x-2 rounded-[8px] bg-secondary text-white px-8 font-bold hover:bg-secondary/80 dark:hover:bg-secondary/80 transition-all duration-300 shadow-md group">
        <!-- Shimmer shine sweep -->
        <span class="absolute inset-0 w-full h-full pointer-events-none" style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%); transform: translateX(-100%); transition: transform 0.5s ease;" onmouseenter="this.style.transform='translateX(100%)'" onmouseleave="this.style.transform='translateX(-100%)'"></span>
        <span class="material-symbols-outlined text-lg relative z-10">open_in_new</span>
        <span class="relative z-10">View on IndiaMART</span>
      </a>
    </div>
  </div>
</section>
<!-- END: Products Section -->
`;

document.getElementById('products-container').innerHTML = productsHTML;

// Filtering Logic
setTimeout(() => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Manage Active States
      filterBtns.forEach(b => {
        b.classList.remove('bg-secondary', 'text-white', 'shadow-secondary/20', 'border-transparent');
        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-100', 'dark:border-slate-700');
      });
      btn.classList.add('bg-secondary', 'text-white', 'shadow-secondary/20', 'border-transparent');
      btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-100', 'dark:border-slate-700');

      // Filter Cards
      const filterValue = btn.getAttribute('data-filter');
      
      productCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex'; // maintain the flex column layout
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}, 50);
