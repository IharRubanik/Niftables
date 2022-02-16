new Swiper('.partners-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

new Swiper('.media-about-slider', {
    navigation: {
        nextEl: '.media-about-button-next',
        prevEl: '.media-about-button-prev',
    },
    loop: true,
    slidesPerView: 9,
    autoplay: {
        delay: 1000,
    }
    
});