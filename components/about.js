const aboutHTML = `
<!-- About Us Section -->
<section id="about" class="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 my-12" data-purpose="about-section">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
    <!-- Image/Visual Column -->
    <div class="relative h-full min-h-[300px] md:min-h-[400px] w-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Industrial Manufacturing Setup"/>
      <div class="absolute inset-0 bg-secondary/10 mix-blend-multiply"></div>
      
      <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white dark:bg-slate-900 p-3 sm:p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
        <p class="font-black text-2xl sm:text-4xl text-primary flex items-end gap-1">
          2012 <span class="text-[10px] sm:text-sm font-semibold uppercase text-slate-500 tracking-widest mb-0.5 sm:mb-1.5 ml-2">Established</span>
        </p>
      </div>
    </div>

    <!-- Text/Content Column -->
    <div class="flex flex-col justify-center h-full">
      <div class="flex items-center gap-2 mb-4 text-secondary dark:text-primary">
        <span class="material-symbols-outlined text-2xl">business</span>
        <span class="text-xs font-bold uppercase tracking-widest">Company Profile</span>
      </div>
      <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-4 sm:mb-8">
        About <span class="text-primary">Our Company</span>
      </h2>
      
      <!-- Text Area (Full Height) -->
      <div class="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] pt-2">
        
        <p class="text-base font-medium text-slate-700 dark:text-slate-300">
          We <strong>Shri Siddhi Vinayak Enterprises</strong>, originating from <strong>2012</strong>, are a highly famous organization of the industry involved in trading a broad assortment of best quality Tachometers, Automatic Battery Chargers, Tool Trolleys, Hand Tool Kits, Power Packs, Hydraulic Lift Systems, Multimeters, Hydraulic Power Packs, Air Compressors, Hydraulic Oils, Tyre Puncture Gauges, Nitrogen Machine Parts Cleaners, Washing Pumps etc.
        </p>

        <p>
          Our provided products are manufactured using only high quality components at our vendor’s ultra-modern processing unit. These products are highly demanded by the customers for their low maintenance, fine finishing, high functioning, super performance and longer service life.
        </p>

        <!-- Authorization Highlight Block -->
        <div class="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border-l-[6px] border-primary space-y-4 shadow-sm">
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-primary text-2xl shrink-0">workspace_premium</span>
            <p class="font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              We are the <strong>only authorized dealer in MP</strong> regarding Hero Motocorp Ltd for all variety products used in garages.
            </p>
          </div>
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-primary text-2xl shrink-0">workspace_premium</span>
            <p class="font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              We are Authorized Dealers of Automobiles Components of <strong>Protech Engineering Pvt Ltd</strong> for supply in the MP & CG circle.
            </p>
          </div>
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-primary text-2xl shrink-0">workspace_premium</span>
            <p class="font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              We are Authorised Dealers of Nitrogen Tyre Inflator (N2 Machine) of <strong>Sunrise Instruments Pvt. Ltd.</strong> for Two Wheelers and Four Wheelers in the CG circle.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3 p-4 rounded-xl bg-secondary text-white font-bold tracking-wide shadow-md">
          <span class="material-symbols-outlined text-primary text-2xl">emoji_events</span>
          <p>We had received awards from the <span class="text-primary">HERO MEGA SERVICE CAMP.</span></p>
        </div>

        <p class="pt-4 border-t border-slate-100 dark:border-slate-800">
          Under the constant supervision of our mentor <strong>Mr. Guptesh Pawar</strong>, we have been able to achieve such a distinct position in this domain. Due to his motivation and valuable direction, we have attained a huge number of clients.
        </p>

      </div>
    </div>
  </div>
</section>
<!-- END: About Us Section -->
`;

document.getElementById('about-container').innerHTML = aboutHTML;
