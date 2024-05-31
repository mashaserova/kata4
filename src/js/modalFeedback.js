document.addEventListener("DOMContentLoaded", function() {
    const btnOpenHeader = document.querySelector('.header-inner__chat');
    const btnOpenMenu = document.querySelector('.contacts-btns__chat');
    const btnClose = document.querySelector('.modal-feedback__close-btn');
    const feedback = document.querySelector('.modal-feedback');
    const siteBody = document.querySelector('.site-body');
    
    btnOpenHeader.addEventListener('click', () => {
        feedback.classList.toggle('modal-feedback_closed');
    });
    btnOpenMenu.addEventListener('click', () => {
        feedback.classList.toggle('modal-feedback_closed');
    });
    
    btnClose.addEventListener('click', () => {
        feedback.classList.toggle('modal-feedback_closed');
    });
    
    siteBody.addEventListener('click', (event) => {
        if (!feedback.contains(event.target) && event.target !== btnOpenHeader && event.target !== btnOpenMenu) {
            feedback.classList.add('modal-feedback_closed');
        }
    });
});