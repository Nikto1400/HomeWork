export const feedbackSlider = () => {
  new Swiper('.feedback__slider', {
    loop: true,
    centeredSlides: "true",
    slidesPerView: '2',
    spaceBetween: 2,

    pagination: {
      el: '.swiper-art-3 .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1640: { slidesPerView: 3 },
      1024: { slidesPerView: 1.5 },
      992: { slidesPerView: 2 },
      768: { slidesPerView: 1 }
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
};