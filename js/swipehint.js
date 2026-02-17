// const stepsSwiper = new Swiper('.steps__container', {
//     slidesPerView: 'auto',
//     spaceBetween: 12,
//     on: {
//         touchMove: function () {
//             // Клас додаємо саме списку, де наш псевдоелемент
//             const list = document.querySelector('.steps__list');
//             if (list) list.classList.add('is-hidden');
//         },
//     },
// });

// Одна функція на всі випадки життя
const handleSwipeHint = (swiper) => {
    // Шукаємо список (wrapper) саме всередині цього слайдера
    const list = swiper.el.querySelector('.swiper-wrapper');
    if (list && !list.classList.contains('is-hidden')) {
        list.classList.add('is-hidden');
    }
};

// Ініціалізація Steps
const stepsSwiper = new Swiper('.steps__container', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    on: {
        touchMove: handleSwipeHint,
    },
});

// Ініціалізація Company
const companySwiper = new Swiper('.company__container', {
    slidesPerView: 'auto',
    spaceBetween: 20, // тут у тебе може бути інший відступ
    on: {
        touchMove: handleSwipeHint,
    },
});