document.addEventListener("DOMContentLoaded", function() {
    const btnOpenHeader = document.querySelector('.header-inner__tel');
    const btnOpenMenu = document.querySelector('.contacts-btns__tel');
    const btnClose = document.querySelector('.modal-tel__close-btn');
    const tel = document.querySelector('.modal-tel');
    const siteBody = document.querySelector('.site-body');
    
    btnOpenHeader.addEventListener('click', () => {
        tel.classList.toggle('modal-tel--closed');
    });
    btnOpenMenu.addEventListener('click', () => {
        tel.classList.toggle('modal-tel--closed');
    });
    
    btnClose.addEventListener('click', () => {
        tel.classList.toggle('modal-tel--closed');
    });
    
    siteBody.addEventListener('click', (event) => {
        if (!tel.contains(event.target) && event.target !== btnOpenHeader && event.target !== btnOpenMenu) {
            tel.classList.add('modal-tel--closed');
        }
    });
});