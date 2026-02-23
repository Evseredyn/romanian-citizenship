// document.addEventListener('DOMContentLoaded', () => {
//     let swiperInstance = null;

//     const initSwiper = () => {
//         const sliderElement = document.querySelector('.stories__slider');
//         if (!sliderElement) return; // Якщо на сторінці немає цієї секції

//         if (window.innerWidth < 1024) {
//             if (!swiperInstance) {
//                 swiperInstance = new Swiper(sliderElement, {
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                     loop: true,
//                     watchSlidesProgress: true,
//                     pagination: {
//                         el: '.stories__pagination',
//                         clickable: true,
//                     },
//                     breakpoints: {
//                         768: {
//                             slidesPerView: 2, // Помітний край наступного слайда
//                             spaceBetween: 30,
//                         }
//                     }
//                 });
//                 console.log('Swiper initialized');
//             }
//         } else {
//             if (swiperInstance) {
//                 swiperInstance.destroy(true, true);
//                 swiperInstance = null;
//                 console.log('Swiper destroyed for desktop');
//             }
//         }
//     };

//     initSwiper();
//     // Додаємо невелику затримку (debounce), щоб не перевантажувати браузер при зміні розміру вікна
//     let resizeTimer;
//     window.addEventListener('resize', () => {
//         clearTimeout(resizeTimer);
//         resizeTimer = setTimeout(initSwiper, 150);
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    let storiesSwiper = null;

    const initStoriesSlider = () => {
        // Використовуємо унікальний клас для ідентифікації саме цього слайдера
        const sliderEl = document.querySelector('.js-stories-slider');
        const paginationEl = document.querySelector('.js-stories-pagination');
        
        if (!sliderEl) return;

        const isMobileOrTablet = window.innerWidth < 1200;

        if (isMobileOrTablet && !storiesSwiper) {
            storiesSwiper = new Swiper(sliderEl, {
                // ВАЖЛИВО: вказуємо пагінацію саме для цього слайдера
                pagination: {
                    el: paginationEl,
                    clickable: true,
                },
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                grabCursor: true, // додає зручності (курсор-рука)
                watchSlidesProgress: true,
                breakpoints: {
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    }
                }
            });
        } else if (!isMobileOrTablet && storiesSwiper) {
            // Видаляємо слайдер, якщо розширились до десктопа
            storiesSwiper.destroy(true, true);
            storiesSwiper = null;
        }
    };

    // Запуск при завантаженні
    initStoriesSlider();

    // Оптимізований ресайз
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initStoriesSlider, 200);
    });
});