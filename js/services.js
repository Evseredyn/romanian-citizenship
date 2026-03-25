(() => {
    const tabs = document.querySelectorAll('.services__tab');
    const items = document.querySelectorAll('.services__item');

    if (tabs.length === 0 || items.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));

            tab.classList.add('active');
            
            const activeCard = document.querySelector(`.services__item[data-index="${targetId}"]`);
            if (activeCard) {
                activeCard.classList.add('active');
            }
        });
    });
})();