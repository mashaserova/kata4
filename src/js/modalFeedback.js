document.addEventListener("DOMContentLoaded", function() {
    const btnOpenHeader = document.querySelector('.header-inner__chat');
    const btnOpenMenu = document.querySelector('.contacts-btns__chat');
    const btnClose = document.querySelector('.modal-feedback__close-btn');
    const feedback = document.querySelector('.modal-feedback');
    const siteBody = document.querySelector('.site-body');
    
    btnOpenHeader.addEventListener('click', () => {
        feedback.classList.toggle('modal-feedback--closed');
    });
    btnOpenMenu.addEventListener('click', () => {
        feedback.classList.toggle('modal-feedback--closed');
    });
    
    btnClose.addEventListener('click', () => {
        feedback.classList.toggle('modal-feedback--closed');
    });
    
    siteBody.addEventListener('click', (event) => {
        if (!feedback.contains(event.target) && event.target !== btnOpenHeader && event.target !== btnOpenMenu) {
            feedback.classList.add('modal-feedback--closed');
        }
    });
});