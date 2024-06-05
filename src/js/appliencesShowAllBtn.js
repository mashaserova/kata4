document.addEventListener("DOMContentLoaded", function() {
    const appliences = document.querySelector('.appliences')
    const btn = document.querySelector('.appliences__show-all-btn');
    const blueArrows = document.querySelectorAll('.show-all-btn_second');
    const els = document.querySelectorAll('.appliences__swiper-slide');
    const elFirst = Array.from(els).slice(3, 8);
    const elSecond = Array.from(els).slice(4, 8);
    const elThird = Array.from(els).slice(3, 4);
    
    if (window.matchMedia("(min-width: 1126px)").matches) {
        elThird.forEach(el => {
            el.classList.remove('appliences__swiper-slide--none');
        })
    }
    btn.addEventListener('click', () => {
        if (window.matchMedia("(min-width: 768px) and (max-width: 1125px)").matches) {
            btn.textContent = "Показать все";
            for (let i = 0; i < elFirst.length; i++) {
                const el = elFirst[i];
                if (el.classList.contains('appliences__swiper-slide--none')) {
                    btn.textContent = "Скрыть";
                    el.classList.remove('appliences__swiper-slide--none');
                    appliences.classList.remove('appliences');
                    appliences.classList.add('appliences--bigger');
                    blueArrows.forEach(arrow => arrow.classList.add('show-less-btn'));
                    blueArrows.forEach(arrow => arrow.classList.remove('show-all-btn'));
                } else {
                    el.classList.add('appliences__swiper-slide--none');
                    appliences.classList.add('appliences');
                    appliences.classList.remove('appliences--bigger');
                    blueArrows.forEach(arrow => arrow.classList.remove('show-less-btn'));
                    blueArrows.forEach(arrow => arrow.classList.add('show-all-btn'));
                } 
            }
        } else if (window.matchMedia("(min-width: 1126px)").matches) {
            btn.textContent = "Показать все";
            for (let i = 0; i < elSecond.length; i++) {
                const el = elSecond[i];
                if (el.classList.contains('appliences__swiper-slide--none')) {
                    btn.textContent = "Скрыть";
                    el.classList.remove('appliences__swiper-slide--none');
                    appliences.classList.remove('appliences');
                    appliences.classList.add('appliences--bigger');
                    blueArrows.forEach(arrow => arrow.classList.add('show-less-btn'));
                    blueArrows.forEach(arrow => arrow.classList.remove('show-all-btn'));
                } else {
                    el.classList.add('appliences__swiper-slide--none');
                    appliences.classList.add('appliences');
                    appliences.classList.remove('appliences--bigger');
                    blueArrows.forEach(arrow => arrow.classList.remove('show-less-btn'));
                    blueArrows.forEach(arrow => arrow.classList.add('show-all-btn'));
                } 
            }
        }
    });
});
