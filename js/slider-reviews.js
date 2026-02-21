// document.addEventListener('DOMContentLoaded', () => {
//     // Перевірка наявності елемента
//     if (document.querySelector('.reviews__slider')) {
//         const reviewsSlider = new Swiper('.reviews__slider', {
//             // Модулі Navigation та Pagination в CDN-версії вже включені
//             slidesPerView: 1,
//             spaceBetween: 20,
//             loop: true,
            
//             // Налаштування точок
//             pagination: {
//                 el: '.reviews__pagination',
//                 clickable: true,
//             },
            
//             // Налаштування кнопок
//             navigation: {
//                 nextEl: '.reviews-slider__next-button',
//                 prevEl: '.reviews-slider__prev-button',
//             },

//             // Адаптивність
//             breakpoints: {
//                 1440: {
//                     slidesPerView: 2,
//                     spaceBetween: 80,
//                 },
//                 // 2560: {
//                 //     slidesPerView: 3,
//                 //     spaceBetween: 30,
//                 // }
//             }
//         });
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     if (document.querySelector('.reviews__slider')) {
//         const reviewsSlider = new Swiper('.reviews__slider', {
//             slidesPerView: 1,
//             spaceBetween: 20,
//             loop: true,
//             watchSlidesProgress: true, // Допомагає правильно відображати видимі слайди
            
//             pagination: {
//                 el: '.reviews__pagination',
//                 type: 'bullets',
//                 clickable: true,
//             },
            
//             navigation: {
//                 nextEl: '.reviews-slider__next-button',
//                 prevEl: '.reviews-slider__prev-button',
//             },

//             breakpoints: {
//                 // Планшет і вище
//                 768: {
//                     slidesPerView: 1,
//                     spaceBetween: 30,
//                 },
//                 // Десктоп (змініть 1024 на 1200, якщо ваш десктоп починається пізніше)
//                 1440: {
//                     slidesPerView: 2,
//                     slidesPerGroup: 1, 
//                     spaceBetween: 80,
//                 }
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    // Шукаємо всі обгортки відгуків
    const reviewsWrappers = document.querySelectorAll('.reviews__main-wrapper');

    reviewsWrappers.forEach((wrapper) => {
        // Шукаємо слайдер саме в цій обгортці
        const sliderEl = wrapper.querySelector('.reviews__slider');
        
        // Шукаємо кнопки тільки в цій обгортці
        const nextBtn = wrapper.querySelector('.reviews-slider__next-button');
        const prevBtn = wrapper.querySelector('.reviews-slider__prev-button');
        
        // Пагінація лежить поруч у тому ж контейнері
        const paginationEl = wrapper.closest('.container').querySelector('.reviews__pagination');

        new Swiper(sliderEl, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            watchSlidesProgress: true,
            
            pagination: {
                el: paginationEl,
                clickable: true,
            },
            
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },

            breakpoints: {
                // Планшет
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                // Десктоп (тепер працюватиме на більшості ноутбуків)
                1200: {
                    slidesPerView: 2,
                    slidesPerGroup: 1, 
                    spaceBetween: 60,
                }
            }
        });
    });
});