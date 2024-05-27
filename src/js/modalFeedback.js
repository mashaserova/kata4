document.addEventListener("DOMContentLoaded", function() {
    const btnOpenHeader = document.querySelector('.header-inner__chat');
    const btnOpenMenu = document.querySelector('.contacts-btns__chat');
    const btnClose = document.querySelectorAll('.close-btn')[0];
    const tel = document.querySelector('.modal-feedback');

    
    btnOpenHeader.addEventListener('click', () => {
        tel.classList.remove('modal-feedback_closed');
    });
    btnOpenMenu.addEventListener('click', () => {
        tel.classList.remove('modal-feedback_closed');
    });
    
    btnClose.addEventListener('click', () => {
        tel.classList.add('modal-feedback_closed');
    });
    
    document.addEventListener('click', (event) => {
        if (!tel.contains(event.target) && event.target !== btnOpenHeader && event.target !== btnOpenMenu) {
            tel.classList.add('modal-feedback_closed');
        }
    });
});