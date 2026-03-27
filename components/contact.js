const contactHTML = `
<!-- Contact Section -->
<section id="contact" class="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
<div class="mx-auto max-w-7xl">
<div class="text-center mb-16">
<h2 class="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-slate-100 mb-4">Get In Touch</h2>
<div class="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
<!-- Head Office & Map -->
<div class="lg:col-span-2 space-y-8">
<div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
<div class="p-8 md:w-1/2">
<div class="inline-block px-3 py-1 rounded bg-secondary text-white text-[10px] font-bold uppercase mb-4 tracking-tighter">
Head Office
</div>
<h3 class="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">Headquarters</h3>
<ul class="space-y-4 text-slate-600 dark:text-slate-400">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-accent">location_on</span>
<span>${window.getFormattedAddress()}</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-accent">smartphone</span>
<a href="tel:${window.getTelNumber()}" class="hover:text-accent transition-colors">Mobile: ${window.getMobileOnly()}</a>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-accent">call</span>
<a href="tel:${window.getLandlineTelNumber()}" class="hover:text-accent transition-colors">Office: ${window.getLandline()}</a>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-accent">mail</span>
<span>${window.getEmail()}</span>
</li>
</ul>
</div>
<div class="h-64 md:h-auto md:w-1/2 bg-slate-200">
<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d442.5713943990419!2d75.89110531698235!3d22.744158767363906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ0JzM4LjciTiA3NcKwNTMnMjkuMyJF!5e0!3m2!1sen!2sin!4v1773895096189!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"></iframe>
</div>
</div>
<!-- Branch Offices -->
<div>
<h3 class="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100">
<span class="material-symbols-outlined text-secondary">hub</span>
Branches
</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="p-6 bg-white dark:bg-slate-800 border-l-4 border-primary rounded shadow-sm">
<h4 class="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">Pune Region</h4>
<p class="text-sm text-slate-500 mb-4">Details to be updated</p>
<div class="flex items-center gap-2 text-accent font-semibold text-sm">
<span class="material-symbols-outlined text-sm">call</span>
Details to be updated
</div>
</div>
<div class="p-6 bg-white dark:bg-slate-800 border-l-4 border-primary rounded shadow-sm">
<h4 class="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">Nashik Region</h4>
<p class="text-sm text-slate-500 mb-4">Details to be updated</p>
<div class="flex items-center gap-2 text-accent font-semibold text-sm">
<span class="material-symbols-outlined text-sm">call</span>
Details to be updated
</div>
</div>
</div>
</div>
</div>
<!-- Contact Form -->
<div class="bg-secondary p-6 sm:p-8 rounded-xl text-white shadow-xl">
<h3 class="text-2xl font-bold mb-2">Send Message</h3>
<p class="text-white/70 text-sm mb-8">Reach out for business inquiries.</p>
<form action="#" class="space-y-5">
<div>
<label class="block text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Full Name</label>
<input class="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" type="text"/>
</div>
<div>
<label class="block text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Email Address</label>
<input class="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@example.com" type="email"/>
</div>
<div>
<label class="block text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Mobile Number</label>
<input class="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+91 00000 00000" type="tel"/>
</div>
<div>
<label class="block text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Inquiry Type</label>
<select class="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary">
<option class="bg-secondary">Sales Inquiry</option>
<option class="bg-secondary">Technical Support</option>
<option class="bg-secondary">Career Opportunities</option>
</select>
</div>
<div>
<label class="block text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Message</label>
<textarea class="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button class="relative overflow-hidden w-full bg-primary hover:bg-yellow-400 text-secondary font-black py-4 rounded-[8px] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(255,215,0,0.45)] hover:-translate-y-0.5 flex justify-center items-center gap-2 group" type="submit">
  <!-- Shimmer shine sweep -->
  <span class="absolute inset-0 w-full h-full pointer-events-none" style="background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%); transform: translateX(-100%); transition: transform 0.5s ease;" onmouseenter="this.style.transform='translateX(100%)'" onmouseleave="this.style.transform='translateX(-100%)'"></span>
  <span class="material-symbols-outlined relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">send</span>
  <span class="relative z-10">SUBMIT REQUEST</span>
</button>
</form>
</div>
</div>
</div>
</section>
`;

document.getElementById('contact-container').innerHTML = contactHTML;
