export const getHeaderHTML = (isHome = true) => {
    const navLinks = isHome 
        ? `<a href="#features" class="text-[0.95rem] font-medium text-textMuted hover:text-white transition-all hidden md:block">Features</a>
           <a href="#tv-experience" class="text-[0.95rem] font-medium text-textMuted hover:text-white transition-all hidden md:block">TV Experience</a>
           <a href="#downloads" class="bg-[linear-gradient(135deg,#3b82f6_0%,#1d4ed8_100%)] text-white px-[0.9rem] md:px-[1.2rem] py-2 md:py-[0.6rem] rounded-lg md:rounded-xl text-[0.8rem] md:text-[0.9rem] font-semibold shadow-[0_4px_15px_rgba(59,130,246,0.25)] border border-white/10 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] transition-all">Download Now</a>
           <div class="relative group ml-2 md:ml-3">
               <button aria-label="Language Selector" class="flex items-center justify-center text-white/80 hover:text-white transition-all bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] rounded-lg md:rounded-xl cursor-pointer h-10 w-10 md:h-[42px] md:w-[42px]">
                   <svg viewBox="0 0 24 24" class="w-5 h-5 md:w-[22px] md:h-[22px] fill-current" aria-hidden="true"><path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"/></svg>
               </button>
               <div class="absolute right-0 top-full mt-2 w-max max-h-[60vh] overflow-y-auto bg-[#0a1120] border border-white/12 rounded-xl backdrop-blur-xl shadow-glass opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 flex flex-col py-1.5 z-50">
                   <a href="/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">English (EN)</a>
                   <a href="/ar/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">العربية (AR)</a>
                   <a href="/cs/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Čeština (CS)</a>
                   <a href="/da/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Dansk (DA)</a>
                   <a href="/de/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Deutsch (DE)</a>
                   <a href="/es/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Español (ES)</a>
                   <a href="/fi/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Suomi (FI)</a>
                   <a href="/fr/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Français (FR)</a>
                   <a href="/he/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">עברית (HE)</a>
                   <a href="/hi/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">हिन्दी (HI)</a>
                   <a href="/hu/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Magyar (HU)</a>
                   <a href="/id/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Bahasa Indonesia (ID)</a>
                   <a href="/it/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Italiano (IT)</a>
                   <a href="/ja/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">日本語 (JA)</a>
                   <a href="/ko/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">한국어 (KO)</a>
                   <a href="/ms/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Bahasa Melayu (MS)</a>
                   <a href="/nl/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Nederlands (NL)</a>
                   <a href="/no/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Norsk (NO)</a>
                   <a href="/pl/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Polski (PL)</a>
                   <a href="/pt/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Português (PT)</a>
                   <a href="/ro/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Română (RO)</a>
                   <a href="/ru/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Русский (RU)</a>
                   <a href="/sk/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Slovenčina (SK)</a>
                   <a href="/sv/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Svenska (SV)</a>
                   <a href="/th/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">ไทย (TH)</a>
                   <a href="/tr/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Türkçe (TR)</a>
                   <a href="/uk/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Українська (UK)</a>
                   <a href="/vi/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">Tiếng Việt (VI)</a>
                   <a href="/zh/" class="text-[0.85rem] text-textMuted hover:text-white hover:bg-white/10 px-4 py-2 transition-all flex items-center gap-2">中文 (ZH)</a>
               </div>
           </div>`
        : `<a href="javascript:void(0)" onclick="if(window.history.length > 1 && document.referrer.includes(window.location.host)) { window.history.back(); } else { window.location.href='/index.html'; }" class="text-[0.95rem] font-medium text-textMuted hover:text-white transition-all flex items-center gap-2">
                <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current" aria-hidden="true"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/></svg>
                Back
            </a>`;

    return `
    <header id="header" class="fixed top-0 left-0 w-full z-100 backdrop-blur-lg bg-bgDark/70 border-b border-white/12 transition-all duration-300">
        <div id="nav-container" class="max-w-300 mx-auto px-4 md:px-8 relative flex justify-between items-center h-[70px] md:h-[80px] transition-all duration-300">
            <a href="/index.html" class="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-extrabold font-outfit bg-clip-text text-transparent bg-[linear-gradient(135deg,#60a5fa_0%,#3b82f6_100%)]">
                <img src="/assets/images/logo.png" alt="LOD Player Logo" loading="lazy" class="w-8 h-8 md:w-10.5 md:h-10.5 rounded-lg md:rounded-[10px] border border-white/15 shadow-[0_4px_12px_rgba(59,130,246,0.3)] object-cover">
                <span class="max-[380px]:hidden">LOD Player</span>
            </a>
            <nav id="desktop-nav" class="flex items-center gap-2 md:gap-8">
                ${navLinks}
            </nav>
        </div>
    </header>
    `;
};
