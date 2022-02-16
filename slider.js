new Swiper('.partners-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});

new Swiper('.media-about-slider', {
    slidesPerView: 8,
    loop: true,
   
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        375: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4.1,
        },
        1024: {
            slidesPerView: 5.5,
        },
        1025:{
            slidesPerView: 6.5,
        },
        1220: {
            slidesPerView: 8,
        }

    },
});