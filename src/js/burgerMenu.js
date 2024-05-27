document.addEventListener("DOMContentLoaded", function() {
    const btnOpen = document.querySelector('.header-inner__burger');
    const btnClose = document.querySelector('.main-menu__burger-btn');
    const menu = document.querySelector('.main-menu');

    
    btnOpen.addEventListener('click', () => {
        menu.classList.remove('main-menu_closed');
    });
    
    btnClose.addEventListener('click', () => {
        menu.classList.add('main-menu_closed');
    });
    
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== btnOpen) {
            menu.classList.add('main-menu_closed');
        }
    });
});