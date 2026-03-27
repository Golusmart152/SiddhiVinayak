const infraGalleryHTML = `
<!-- Office Photo Gallery Section (Squircle Grid) -->
<section id="infrastructure" class="bg-secondary py-20 px-4 md:px-0">
  <div class="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 mb-12">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Office Gallery</h2>
    <div class="w-20 h-1.5 bg-primary"></div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
    <div class="relative group overflow-hidden rounded-[2rem]">
      <div class="aspect-square md:aspect-[4/3]">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Global Hub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDce-VXNkt-hu9UtsrDjPhPvdg5-Kbmn3hb47iYCBixMD775rHO-WbWhCxlx7dVTbyrbELAdztrqtJ-BOSKHzwalUk0mLjMVEpR0XquBFLm_cL3Y6OjLLQjhskAN8CDAO9Qocj0FO2C_WqiSnDzCFtSGg3w4OJV7iBqY2EvgoYUPOWp8UCrxvEx7y3FxwvrfzXsms0Yb0_wIhyKOXa69jX9lOsSf81B0W2XtZ0iKNf-HaqKivvemmVSIIl2ICXk08MKsaqjm08PqfGe"/>
      </div>
      <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
        <h4 class="text-white text-2xl font-bold">Global Hub</h4>
        <p class="text-primary mt-2 font-medium">Headquarters</p>
      </div>
    </div>
    
    <div class="relative group overflow-hidden rounded-[2rem]">
      <div class="aspect-square md:aspect-[4/3]">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Smart Manufacturing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5kibTXWBl1ScNHWUiBBwuFF5B7DjtVBagFw99PJe21kvwTbE8q5LGy_smLEv1b1MbSplJtMuC04PEempciHU8a83vduiQlbixwGWesaolIJ6kSenYy48J0xXQZAR5NuOoAOw5LnoTSDBJoRbboxhriYdbdsoCvLmSNnyz9_5MkHrJwUoegUOMyy_QZ2g84i0b5fQXWY8j7h6ijwgh9uZWpuFLoVOB9bGtUXN_NzgOdKXfh_lrAuAKZ3FYUBActJqu-FdSrzp46Ps4"/>
      </div>
      <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
        <h4 class="text-white text-2xl font-bold">Smart Manufacturing</h4>
        <p class="text-primary mt-2 font-medium">Industry 4.0 Integration</p>
      </div>
    </div>

    <div class="relative group overflow-hidden rounded-[2rem]">
      <div class="aspect-square md:aspect-[4/3]">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Logistics & Storage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD54pl_5ZKNkhTa72ED_QsPV5tIGY6IqGzHkFB7ISpcEx23ZVoMeGvq8Q9MdA9TVKPaHfIklNbL6Ikl9XNPJ-xFnhU6sc1Qh_1LdlihCIWf-5b88eTwVcH-3uuFXOALQSr9ypdniiTv0RIvxWbX1NE7NLKhuaE2IBTsOvtY5eADwiU9M_LXliHLLNSnRCax3BvEDr_CwDlBOx3V2mnVKjpHrwUkNMoqBruOfdw8_J7QRNK_EsLlaeCZP0_YSXcmDhIC2fqWumNJG-7a"/>
      </div>
      <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
        <h4 class="text-white text-2xl font-bold">Logistics & Storage</h4>
        <p class="text-primary mt-2 font-medium">Advanced Inventory Systems</p>
      </div>
    </div>

    <div class="relative group overflow-hidden rounded-[2rem]">
      <div class="aspect-square md:aspect-[4/3]">
        <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Design Hub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADtjzfQc8JogkYG1LcuKtdtDoMmNTi09FfEFVRQaPBEuyv2FDyUaMZS8fWpf8RjDVkp9BqyGQ-gkzghPkEXSTdwe6xoxOzrRstCp1Nbq1Xqj5iqcPLGzOnOVBq_-LXMMAmQYLOj0rU6HvmhEFO3RgI12twVJrCziPso1TETZbubwK0nSidhrlFeZL8pwpidyFMfBDLR1sJw4WXiGCHagGu-v5fn_nQM0jCwprZQBbohfK3BWQlLGUw8cxpVn_5z5wIxBL6vSY6Gm04"/>
      </div>
      <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
        <h4 class="text-white text-2xl font-bold">Design Hub</h4>
        <p class="text-primary mt-2 font-medium">Engineering & Product Development</p>
      </div>
    </div>
  </div>
</section>
`;

document.getElementById('infrastructure-gallery-container').innerHTML = infraGalleryHTML;
