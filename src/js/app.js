import layoutController from './controllers/layoutController.js';
import headerController from './controllers/headerController.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render layout components first
    layoutController.init();

    // 2. Initialize all other controllers
    headerController.init();
});
