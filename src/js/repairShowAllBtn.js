document.addEventListener("DOMContentLoaded", function() {
    const repair = document.querySelector('.repair')
    const btn = document.querySelector('.repair__show-all-btn');
    const blueArrows = document.querySelector('.show-all-btn')
    const els = document.querySelectorAll('.repair__swiper-slide');
    const elFirst = Array.from(els).slice(6, 11);
    const elSecond = Array.from(els).slice(8, 11);
    const elThird = Array.from(els).slice(6, 8);
    if (window.matchMedia("(min-width: 1126px)").matches) {
        elThird.forEach(el => {
            el.classList.remove('repair__swiper-slide--none');
        })
    }
    btn.addEventListener('click', () => {
        if (window.matchMedia("(min-width: 768px) and (max-width: 1125px)").matches) {
            btn.textContent = "Показать все";
            elFirst.forEach( el => {
                if (el.classList.contains('repair__swiper-slide--none')) {
                    btn.textContent = "Скрыть";
                    el.classList.remove('repair__swiper-slide--none');
                    repair.classList.remove('repair');
                    repair.classList.add('repair--bigger');
                    blueArrows.classList.add('show-less-btn');
                    blueArrows.classList.remove('show-all-btn');
                } else {
                    el.classList.add('repair__swiper-slide--none');
                    repair.classList.add('repair');
                    repair.classList.remove('repair--bigger');
                    blueArrows.classList.remove('show-less-btn');
                    blueArrows.classList.add('show-all-btn');
                } 
            });
        } else if (window.matchMedia("(min-width: 1126px)").matches) {
            btn.textContent = "Показать все";
            elSecond.forEach( el => {
                if (el.classList.contains('repair__swiper-slide--none')) {
                    btn.textContent = "Скрыть";
                    el.classList.remove('repair__swiper-slide--none');
                    repair.classList.remove('repair');
                    repair.classList.add('repair--bigger');
                    blueArrows.classList.add('show-less-btn');
                    blueArrows.classList.remove('show-all-btn');
                } else {
                    el.classList.add('repair__swiper-slide--none');
                    repair.classList.add('repair');
                    repair.classList.remove('repair--bigger');
                    blueArrows.classList.remove('show-less-btn');
                    blueArrows.classList.add('show-all-btn');
                } 
            });
        }
    });
});