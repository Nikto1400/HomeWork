export const feedbackSlider = () => {
  new Swiper('.feedback__slider', {
    loop: true,
    centeredSlides: "true",
    slidesPerView: '2',
    spaceBetween: 24,

    pagination: {
      el: '.swiper-art-3 .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1640: { slidesPerView: 3 },
      1024: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
};