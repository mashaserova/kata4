document.addEventListener("DOMContentLoaded", function() {
    const btnOpen = document.querySelector('.header-inner__burger');
    const btnClose = document.querySelector('.main-menu__burger-btn');
    const menu = document.querySelector('.main-menu');
    const siteBody = document.querySelector('.site-body');

    
    btnOpen.addEventListener('click', () => {
        menu.classList.toggle('main-menu_closed');
    });
    
    btnClose.addEventListener('click', () => {
        menu.classList.toggle('main-menu_closed');
    });
    
    siteBody.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== btnOpen) {
            menu.classList.add('main-menu_closed');
        }
    });
});