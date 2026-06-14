import { getHeaderHTML } from '../views/components/HeaderComponent.js';
import { getFooterHTML } from '../views/components/FooterComponent.js';

class LayoutController {
    init() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        const path = window.location.pathname;
        const isHome = path.endsWith('index.html') || path === '/' || !path.includes('.html');

        if (headerPlaceholder) {
            headerPlaceholder.outerHTML = getHeaderHTML(isHome);
        }

        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = getFooterHTML();
        }
    }
}

export default new LayoutController();
