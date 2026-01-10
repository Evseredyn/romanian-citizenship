stepsSlider = new Swiper('.company__container', {
    slidesPerView: 'auto', 
    spaceBetween: 12, 
    centeredSlides: false,
    
    // Відступ першої картки від лівого краю екрана (ваші 16px)
    // slidesOffsetBefore: 16, 
    
    // Відступ після останньої картки (теж 16px, щоб було симетрично при кінці скролу)
    // slidesOffsetAfter: 16,  
    
    grabCursor: true,
    resistanceRatio: 0.5,
    observer: true,
    observeParents: true
});