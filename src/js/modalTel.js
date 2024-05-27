document.addEventListener("DOMContentLoaded", function() {
    const btnOpenHeader = document.querySelector('.header-inner__tel');
    const btnOpenMenu = document.querySelector('.contacts-btns__tel');
    const btnClose = document.querySelectorAll('.close-btn')[1];
    const tel = document.querySelector('.modal-tel');
    const shadow = document.querySelector('.modalTel-shadow')

    
    btnOpenHeader.addEventListener('click', () => {
        tel.classList.remove('modal-tel_closed');
        shadow.classList.remove('modalTel-shadow_closed')
    });
    btnOpenMenu.addEventListener('click', () => {
        tel.classList.remove('modal-tel_closed');
        shadow.classList.remove('modalTel-shadow_closed')
    });
    
    btnClose.addEventListener('click', () => {
        tel.classList.add('modal-tel_closed');
        shadow.classList.add('modalTel-shadow_closed')
    });
    
    document.addEventListener('click', (event) => {
        if (!tel.contains(event.target) && event.target !== btnOpenHeader && event.target !== btnOpenMenu) {
            tel.classList.add('modal-tel_closed');
            shadow.classList.add('modalTel-shadow_closed')
        }
    });
});