export const responsiveSwiper = {
  slidesPerView: 4,
  spaceBetween: 20,
  swiperSlide: {
    isNext: true,
  },
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
};
