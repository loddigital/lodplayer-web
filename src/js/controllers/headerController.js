import { configModel } from '../models/configModel.js';
import headerView from '../views/headerView.js';

class HeaderController {
    init() {
        this.bindEvents();
        // Check initial state in case page is reloaded halfway down
        this.checkScrollState();
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            this.checkScrollState();
        });
    }

    checkScrollState() {
        const isScrolled = window.scrollY > configModel.headerScrollThreshold;
        headerView.updateHeaderOnScroll(isScrolled);
    }
}

export default new HeaderController();
