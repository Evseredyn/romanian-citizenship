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


// // Одна функція на всі випадки життя
// const handleSwipeHint = (swiper) => {
//     // Шукаємо список (wrapper) саме всередині цього слайдера
//     const list = swiper.el.querySelector('.swiper-wrapper');
//     if (list && !list.classList.contains('is-hidden')) {
//         list.classList.add('is-hidden');
//     }
// };

// // Ініціалізація Steps
// const stepsSwiper = new Swiper('.steps__container', {
//     slidesPerView: 'auto',
//     spaceBetween: 12,
//     on: {
//         touchMove: handleSwipeHint,
//     },
// });

// // Ініціалізація Company
// const companySwiper = new Swiper('.company__container', {
//     slidesPerView: 'auto',
//     spaceBetween: 20, // тут у тебе може бути інший відступ
//     on: {
//         touchMove: handleSwipeHint,
//     },
// });

const handleSwipeHint = (swiper) => {
    // Якщо слайдер вимкнено (на планшеті), функція не піде далі
    if (!swiper.enabled) return;

    const list = swiper.el.querySelector('.swiper-wrapper');
    if (list && !list.classList.contains('is-hidden')) {
        list.classList.add('is-hidden');
    }
};

const swiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 12,
    grabCursor: true,
    // Налаштування для різних екранів
    breakpoints: {
        // Коли екран >= 768px
        768: {
            enabled: false, // Повністю вимикає Swiper
        }
    },
    on: {
        touchMove: handleSwipeHint,
    },
};

// Ініціалізація
const stepsSwiper = new Swiper('.steps__container', swiperOptions);
// Для компанії можна використати ті ж опції, або змінити spaceBetween
const companySwiper = new Swiper('.company__container', { 
    ...swiperOptions, 
    spaceBetween: 20 
});