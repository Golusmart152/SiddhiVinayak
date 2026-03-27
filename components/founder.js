const founderHTML = `
<!-- Founder Section -->
<section id="founder" class="relative py-12 px-6 overflow-x-hidden">
<div class="mx-auto max-w-7xl">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<!-- Image Container (Circular Shape) -->
<div class="lg:col-span-5 flex justify-center">
<div class="relative group">
<div class="absolute -inset-4 rounded-full bg-primary/20 blur-2xl group-hover:bg-accent/20 transition-all"></div>
<!-- Changed from oval to circular -->
<div class="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white dark:border-slate-800 shadow-2xl bg-slate-200 overflow-hidden">
<div class="h-full w-full bg-cover bg-center" data-alt="Professional portrait of the company founder in business attire" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmxbaq3MlzSSddp5edFCgXUDivSMcPRb-P4bNFkqnuDPLSE5oQfwPQcfJWhRwmen8nDbKzZmrvW8fwG2XB_ALm6VsGy_-Qa5n4WLdWuiJjgN6U-dwp-RwM3H71i40c5qNgQeStx_B2-cl9N5TXoJKO-xXtASzRETVWy3RKx04HBxXpqXhAplJj37Z6IWB2rxJob5Fr821uLZMfDEKSmCa4fpMzTy3614Dtyn3gQZhPpwYiSxgitDL6tIcX9XttSsdOa4R8eqndV0Yx');"></div>
</div>
<div class="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 bg-secondary p-4 md:p-6 rounded-full shadow-xl text-white w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center">
<p class="text-2xl md:text-3xl font-bold">25+</p>
<p class="text-[9px] md:text-xs uppercase tracking-tighter opacity-80 leading-tight mt-1">Years<br>Exp.</p>
</div>
</div>
</div>
<!-- Bio Content -->
<div class="lg:col-span-7">
<div class="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
<span class="w-2 h-2 rounded-full bg-accent border border-accent"></span>
Leadership &amp; Vision
</div>
<h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary dark:text-slate-100 mb-6 leading-tight">
Driving Innovation with <br/><span class="text-accent">Integrity &amp; Excellence</span>
</h2>
<p class="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
Meet our visionary founder, whose two decades of industrial expertise have shaped Shri Siddhivinayak Enterprises into a powerhouse of quality and reliability. Under his leadership, we have transitioned from a local supplier to a multi-branch enterprise serving the nation's most critical infrastructure needs.
</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-800 pt-8">
<div class="flex gap-4">
<span class="material-symbols-outlined text-primary text-3xl">verified_user</span>
<div>
<h4 class="font-bold text-slate-800 dark:text-slate-200">Quality Assured</h4>
<p class="text-sm text-slate-500">Committed to international standards.</p>
</div>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-primary text-3xl">psychology</span>
<div>
<h4 class="font-bold text-slate-800 dark:text-slate-200">Strategic Vision</h4>
<p class="text-sm text-slate-500">Anticipating market shifts ahead of time.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
`;

document.getElementById('founder-container').innerHTML = founderHTML;
