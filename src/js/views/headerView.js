class HeaderView {
    constructor() {
        this.header = null;
        this.navContainer = null;
        
        // Tailwind utility classes mappings for states
        this.scrolledHeaderClasses = ['py-3', 'bg-[#060b13]/90', 'shadow-[0_4px_20px_rgba(0,0,0,0.3)]'];
        this.topHeaderClasses = ['bg-[#060b13]/70'];
        
        this.scrolledNavClasses = ['h-[50px]', 'md:h-[60px]'];
        this.topNavClasses = ['h-[60px]', 'md:h-[80px]'];
    }

    init() {
        this.header = document.getElementById('header');
        this.navContainer = document.getElementById('nav-container');
    }

    updateHeaderOnScroll(isScrolled) {
        if (!this.header || !this.navContainer) return;

        if (isScrolled) {
            this.header.classList.add(...this.scrolledHeaderClasses);
            this.header.classList.remove(...this.topHeaderClasses);
            this.navContainer.classList.add(...this.scrolledNavClasses);
            this.navContainer.classList.remove(...this.topNavClasses);
        } else {
            this.header.classList.remove(...this.scrolledHeaderClasses);
            this.header.classList.add(...this.topHeaderClasses);
            this.navContainer.classList.remove(...this.scrolledNavClasses);
            this.navContainer.classList.add(...this.topNavClasses);
        }
    }
}

export default new HeaderView();
