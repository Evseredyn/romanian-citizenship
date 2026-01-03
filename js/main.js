document.addEventListener('DOMContentLoaded', function() {
    const yearsElement = document.getElementById('copyright-years');

    if (yearsElement) {
        const startYear = yearsElement.textContent;
        const currentYear = new Date().getFullYear();

        if (parseInt(startYear) < currentYear) {
            yearsElement.textContent = `${startYear}-${currentYear}`;
        } else {
            yearsElement.textContent = startYear;
        }
    }
});