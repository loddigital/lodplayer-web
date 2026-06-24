export const getFooterHTML = () => {
    return `
    <footer class="bg-[#030712] border-t border-white/12 pt-10 pb-6 text-[0.95rem] text-textMuted mt-auto">
        <div class="max-w-300 mx-auto px-8 relative grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-8 mb-6">
            <div class="flex flex-col gap-5">
                <div class="flex items-center gap-2.5 font-outfit text-[1.4rem] font-extrabold text-white">
                    <img src="/assets/images/logo.png" loading="lazy" alt="LOD Player Logo" class="w-8 h-8 rounded-lg object-cover">
                    <span class="bg-[linear-gradient(135deg,#60a5fa_0%,#3b82f6_100%)] bg-clip-text text-transparent">LOD Player</span>
                </div>
                <p class="max-w-[320px] text-[0.9rem] leading-relaxed">An advanced IPTV player developed by LOD Digital. Offering secure local offline downloads and smart D-pad remote controller support for televisions and mobile devices.</p>
            </div>
            <div>
                <h3 class="font-outfit text-[1.05rem] font-semibold text-white mb-5">Quick Links</h3>
                <ul class="flex flex-col gap-2.5 list-none">
                    <li><a href="/index.html#features" class="hover:text-white transition-all hover:pl-1">Features</a></li>
                    <li><a href="/index.html#tv-experience" class="hover:text-white transition-all hover:pl-1">TV Experience</a></li>
                    <li><a href="/index.html#downloads" class="hover:text-white transition-all hover:pl-1">Download</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-outfit text-[1.05rem] font-semibold text-white mb-5">Support and Contact</h3>
                <div class="flex flex-col gap-2.5">
                    <div class="flex items-center gap-2.5 text-[0.9rem]">
                        <svg viewBox="0 0 24 24" class="w-4 h-4 fill-textMuted" aria-hidden="true"><path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/></svg>
                        <a href="mailto:support.lodplayer@gmail.com" class="hover:text-white">support.lodplayer@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-300 mx-auto px-8 relative border-t border-white/12 pt-7 flex flex-col md:flex-row gap-4 items-center justify-between text-[0.85rem] text-textDark">
            <p>&copy; 2026 LOD Digital. All Rights Reserved.</p>
            <div class="flex gap-5">
                <a href="/privacy-policy.html" class="hover:text-textMuted transition-colors">Privacy Policy</a>
            </div>
        </div>
    </footer>
    `;
};
