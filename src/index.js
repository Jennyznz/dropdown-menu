import './styles.css';
import { createMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    const items = ['Item1', 'Item2'];
    createMenu('Menu2', items);

    const dropMenus = document.querySelectorAll('.dropdown-menu');

    dropMenus.forEach(menu => {
        const toggle = menu.querySelector('.toggle');
        const content = menu.querySelector('.content');

        // Add Event Listener to the toggle button
        toggle.addEventListener('click', () => {
            // Make content of menu visible
            content.style.visibility = (content.style.visibility === 'visible') ? 'hidden' : 'visible';
        });
    });
});
