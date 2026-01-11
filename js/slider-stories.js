document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null;

    const initSwiper = () => {
        const sliderElement = document.querySelector('.stories__slider');
        if (!sliderElement) return; // Якщо на сторінці немає цієї секції

        if (window.innerWidth < 1200) {
            if (!swiperInstance) {
                swiperInstance = new Swiper(sliderElement, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    watchSlidesProgress: true,
                    pagination: {
                        el: '.stories__pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2, // Помітний край наступного слайда
                            spaceBetween: 30,
                        }
                    }
                });
                console.log('Swiper initialized');
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
                console.log('Swiper destroyed for desktop');
            }
        }
    };

    initSwiper();
    // Додаємо невелику затримку (debounce), щоб не перевантажувати браузер при зміні розміру вікна
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initSwiper, 150);
    });
});