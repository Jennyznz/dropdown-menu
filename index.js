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