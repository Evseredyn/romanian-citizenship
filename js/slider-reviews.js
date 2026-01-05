document.addEventListener('DOMContentLoaded', () => {
    // Перевірка наявності елемента
    if (document.querySelector('.reviews__slider')) {
        const reviewsSlider = new Swiper('.reviews__slider', {
            // Модулі Navigation та Pagination в CDN-версії вже включені
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            
            // Налаштування точок
            pagination: {
                el: '.reviews__pagination',
                clickable: true,
            },
            
            // Налаштування кнопок
            navigation: {
                nextEl: '.reviews-slider__next-button',
                prevEl: '.reviews-slider__prev-button',
            },

            // Адаптивність
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    }
});