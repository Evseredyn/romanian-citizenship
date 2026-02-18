document.addEventListener('DOMContentLoaded', () => {
    const processBtns = document.querySelectorAll('.process__btn');
    const stageItems = document.querySelectorAll('.stages__item');

    processBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // 1. Активна кнопка
            processBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Активний контент
            stageItems.forEach(item => {
                if (item.getAttribute('data-category') === filter) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // 3. Скрол вгору до початку секції (тільки для мобайлу)
            if (window.innerWidth < 1024) {
                const scrollTarget = document.querySelector('.process');
                const offset = 80; // висота липких табів + запас
                const top = scrollTarget.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
});