document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelector('.faq__accordion');

    if (accordion) {
        // 1. Автоматичне відкриття першого елемента
        const firstItem = accordion.querySelector('.accordion__item');
        if (firstItem) {
            const firstToggle = firstItem.querySelector('.accordion__toggle');
            const firstContent = firstItem.querySelector('.accordion__content');
            
            if (firstToggle && firstContent) {
                firstToggle.setAttribute('aria-expanded', 'true');
                firstContent.style.maxHeight = firstContent.scrollHeight + "px";
            }
        }

        // 2. Обробка кліків
        accordion.addEventListener('click', (e) => {
            const toggle = e.target.closest('.accordion__toggle');
            if (!toggle) return;

            const item = toggle.parentElement;
            const content = item.querySelector('.accordion__content');
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';

            // Закриваємо інші вкладки
            const allToggles = accordion.querySelectorAll('.accordion__toggle');
            allToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherToggle.parentElement.querySelector('.accordion__content').style.maxHeight = null;
                }
            });

            // Перемикаємо поточну
            if (isOpen) {
                toggle.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                toggle.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});