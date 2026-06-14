export const getHeaderHTML = (isHome = true) => {
    const navLinks = isHome 
        ? `<a href="#features" class="text-[0.95rem] font-medium text-textMuted hover:text-white transition-all hidden md:block">Features</a>
           <a href="#tv-experience" class="text-[0.95rem] font-medium text-textMuted hover:text-white transition-all hidden md:block">TV Experience</a>
           <a href="#downloads" class="bg-[linear-gradient(135deg,#3b82f6_0%,#1d4ed8_100%)] text-white px-[0.9rem] md:px-[1.2rem] py-2 md:py-[0.6rem] rounded-lg md:rounded-xl text-[0.8rem] md:text-[0.9rem] font-semibold shadow-[0_4px_15px_rgba(59,130,246,0.25)] border border-white/10 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] transition-all">Download Now</a>`
        : `<a href="./index.html" class="text-[0.95rem] font-medium text-textMuted hover:text-white transition-all flex items-center gap-2">
                <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/></svg>
                Back to Home
            </a>`;

    return `
    <header id="header" class="fixed top-0 left-0 w-full z-100 backdrop-blur-lg bg-bgDark/70 border-b border-white/12 transition-all duration-300">
        <div id="nav-container" class="max-w-300 mx-auto px-4 md:px-8 relative flex justify-between items-center h-15 md:h-20 transition-all duration-300">
            <a href="./index.html" class="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-extrabold font-outfit bg-clip-text text-transparent bg-[linear-gradient(135deg,#60a5fa_0%,#3b82f6_100%)]">
                <img src="./assets/images/logo.png" alt="LOD Player Logo" loading="lazy" class="w-8 h-8 md:w-10.5 md:h-10.5 rounded-lg md:rounded-[10px] border border-white/15 shadow-[0_4px_12px_rgba(59,130,246,0.3)] object-cover">
                <span class="max-[380px]:hidden">LOD Player</span>
            </a>
            <nav id="desktop-nav" class="flex items-center gap-2 md:gap-8">
                ${navLinks}
            </nav>
        </div>
    </header>
    `;
};
