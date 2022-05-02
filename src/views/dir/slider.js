var imageSlider = new Swiper('.image-slider', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        // when window is <= 580px
        580: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window is <= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window is <= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        },

    }
});
