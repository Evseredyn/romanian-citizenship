// document.addEventListener('DOMContentLoaded', () => {
//     const processBtns = document.querySelectorAll('.process__btn');
//     const stageItems = document.querySelectorAll('.stages__item');

//     processBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const filter = btn.getAttribute('data-filter');

//             // 1. Активна кнопка
//             processBtns.forEach(b => b.classList.remove('active'));
//             btn.classList.add('active');

//             // 2. Активний контент
//             stageItems.forEach(item => {
//                 if (item.getAttribute('data-category') === filter) {
//                     item.classList.add('active');
//                 } else {
//                     item.classList.remove('active');
//                 }
//             });

//             // 3. Скрол вгору до початку секції (тільки для мобайлу)
//             if (window.innerWidth < 1024) {
//                 const scrollTarget = document.querySelector('.process');
//                 const offset = 80; // висота липких табів + запас
//                 const top = scrollTarget.getBoundingClientRect().top + window.pageYOffset - offset;

//                 window.scrollTo({ top, behavior: 'smooth' });
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.process__link');
//     const sections = document.querySelectorAll('.stages__item');

//     const options = {
//         // Відступи від країв екрана (верх/ниж), щоб активувати пункт раніше
//         rootMargin: '-20% 0px -70% 0px', 
//         threshold: 0
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const id = entry.target.getAttribute('id');
                
//                 // Видаляємо клас у всіх
//                 navLinks.forEach(link => {
//                     link.classList.remove('active');
//                     if (link.getAttribute('href') === `#${id}`) {
//                         link.classList.add('active');
//                     }
//                 });
//             }
//         });
//     }, options);

//     sections.forEach(section => observer.observe(section));

//     // Плавний скрол (опціонально, якщо не налаштовано в CSS)
//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href');
//             const targetElement = document.querySelector(targetId);

//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.process__link');
//     const sections = document.querySelectorAll('.stages__item');

//     // 1. Обробка кліку (Active class)
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             // Видаляємо active у всіх
//             navLinks.forEach(l => l.classList.remove('active'));
//             // Додаємо поточному
//             this.classList.add('active');
//         });
//     });

//     // 2. Відстеження скролу (щоб таби перемикалися самі, коли користувач гортає сторінку)
//     const observerOptions = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.6 // Коли 60% секції у в'юпорті
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const id = entry.target.getAttribute('id');
//                 navLinks.forEach(link => {
//                     link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
//                 });
//             }
//         });
//     }, observerOptions);

//     sections.forEach(section => observer.observe(section));
// });

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.process__link');
    const sections = document.querySelectorAll('.stages__item');

    // 1. Плавний скрол при кліку (опціонально, але корисно)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Розумне відстеження скролу
    const observerOptions = {
        root: null,
        // rootMargin зміщує зону "спрацьовування" до верхньої частини екрана
        rootMargin: '-10% 0px -70% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // 3. Фікс для останнього пункту (якщо доскролили до самого низу)
    window.addEventListener('scroll', () => {
        const isBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
        
        if (isBottom) {
            navLinks.forEach(l => l.classList.remove('active'));
            navLinks[navLinks.length - 1].classList.add('active');
        }
    });
});