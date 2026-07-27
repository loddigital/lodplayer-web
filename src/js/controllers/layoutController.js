import { getHeaderHTML } from '../views/components/HeaderComponent.js';
import { getFooterHTML } from '../views/components/FooterComponent.js';

class LayoutController {
    init() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        const path = window.location.pathname;
        const isHome = path.endsWith('index.html') || path === '/' || !path.includes('.html');

        if (headerPlaceholder) {
            let headerHTML = getHeaderHTML(isHome);
            headerHTML = headerHTML.replace(/\{\{seo\.base_url\}\}/g, '/');
            headerPlaceholder.outerHTML = headerHTML;
        }

        if (footerPlaceholder) {
            let footerHTML = getFooterHTML();
            footerHTML = footerHTML.replace(/\{\{seo\.base_url\}\}/g, '/');
            footerPlaceholder.outerHTML = footerHTML;
        }
    }
}

export default new LayoutController();
