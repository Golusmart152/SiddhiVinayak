const floatingContactHTML = `
<style>
  /* Premium Floating Animations */
  @keyframes ripple-blue { 0% { box-shadow: 0 0 0 0 rgba(26, 34, 127, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(26, 34, 127, 0); } 100% { box-shadow: 0 0 0 0 rgba(26, 34, 127, 0); } }
  @keyframes ripple-green { 0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); } 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); } }
  .animate-ripple-blue { animation: ripple-blue 2s infinite; }
  .animate-ripple-green { animation: ripple-green 2s infinite; animation-delay: 1s; }
  
  .floating-btn {
    width: 52px; height: 52px;
    border-radius: 9999px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    color: white; shadow-lg;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    pointer-events: auto;
    text-decoration: none;
    border: 2px solid rgba(255,255,255,0.2);
  }
  .floating-btn:active { transform: scale(0.9); }
  .floating-btn span.label { font-size: 7px; font-weight: 900; text-transform: uppercase; margin-top: -1px; letter-spacing: 0.05em; }
</style>

<!-- Mobile Floating Contact Buttons -->
<div class="fixed bottom-6 right-6 flex flex-col gap-5 z-[99999] md:hidden pointer-events-none floating-contact-container">
  
  <!-- Actual WhatsApp Button (Official Green) -->
  <a href="https://wa.me/${window.getWhatsAppNumber()}?text=Hello%21%20I%20am%20interested%20in%20your%20industrial%20products." 
     target="_blank" rel="noopener noreferrer"
     class="floating-btn bg-[#25D366] animate-ripple-green shadow-[0_8px_30px_rgba(37,211,102,0.5)]" 
     aria-label="Chat on WhatsApp">
    <!-- Official WhatsApp SVG Logo -->
    <svg width="24" height="24" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="white">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.9 480l117.7-30.9c32.7 17.8 69.4 27.2 107.4 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-64.9-157.2zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.4-11.3 2.6-2.4 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 34.9 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
    <span class="label">Chat</span>
  </a>

  <!-- Premium Call Button (Deep Navy) -->
  <a href="tel:${window.getLandlineTelNumber()}" 
     class="floating-btn bg-secondary animate-ripple-blue shadow-[0_8px_30px_rgba(26,34,127,0.5)]" 
     aria-label="Call Office">
    <span class="material-symbols-outlined text-2xl">headset_mic</span>
    <span class="label">Office</span>
  </a>
</div>
`;

document.body.insertAdjacentHTML('beforeend', floatingContactHTML);
