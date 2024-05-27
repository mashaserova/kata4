const allSliders = document.querySelectorAll('.swiper-container');
let swipers = [];

function initSwipers() {
    allSliders.forEach(container => {
        const swiper = new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            pagination: {
                clickable: true,
                el: ".swiper-pagination",
            },
        });
        swipers.push(swiper);
    });
}

function destroySwipers() {
    swipers.forEach(swiper => swiper.destroy());
    swipers = [];
}

function handleResize() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        destroySwipers();
    } else {
        initSwipers();
    }
}

initSwipers();
handleResize();
window.addEventListener('resize', handleResize);