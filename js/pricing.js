(() => {
    const tabs = document.querySelectorAll('.pricing__tab');
    const items = document.querySelectorAll('.pricing__item');

    if (tabs.length === 0 || items.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));

            tab.classList.add('active');
            
            const activeCard = document.querySelector(`.pricing__item[data-index="${targetId}"]`);
            if (activeCard) {
                activeCard.classList.add('active');
            }
        });
    });
})();

// document.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.pricing__tab');
//     const items = document.querySelectorAll('.pricing__item');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             const target = tab.getAttribute('data-target');

//             // Оновлюємо таби
//             tabs.forEach(t => t.classList.remove('active'));
//             tab.classList.add('active');

//             // Оновлюємо картки
//             items.forEach(item => {
//                 item.classList.remove('active');
//                 if (item.getAttribute('data-index') === target) {
//                     item.classList.add('active');
//                 }
//             });
//         });
//     });
// });

// (() => {
//     const tabs = document.querySelectorAll('.pricing__tab');
//     const items = document.querySelectorAll('.pricing__item');

//     console.log('Знайдено табів:', tabs.length);
//     console.log('Знайдено карток:', items.length);

//     if (tabs.length === 0 || items.length === 0) {
//         console.error('Елементи табів не знайдені! Перевірте класи .pricing__tab та .pricing__item');
//         return;
//     }

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             const targetId = tab.getAttribute('data-target');
//             console.log('Натиснуто таб:', targetId);

//             // 1. Знімаємо active з усіх кнопок
//             tabs.forEach(t => t.classList.remove('active'));
//             // 2. Знімаємо active з усіх карток
//             items.forEach(item => item.classList.remove('active'));

//             // 3. Додаємо active натиснутій кнопці
//             tab.classList.add('active');
            
//             // 4. Шукаємо картку з таким самим індексом
//             const activeCard = document.querySelector(`.pricing__item[data-index="${targetId}"]`);
//             if (activeCard) {
//                 activeCard.classList.add('active');
//             } else {
//                 console.warn(`Картку з індексом ${targetId} не знайдено`);
//             }
//         });
//     });
// })();