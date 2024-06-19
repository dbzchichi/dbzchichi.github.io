const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  // slidesPerView: "auto",

  spaceBetween: 0,


  breakpoints: {
    800: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  },
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    reverseDirection: true,

  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var swiper2 = new Swiper(".swiperPrograms", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  autoplay: {
    delay: 500000000000000000000000000000000000,
  },
  loop: false,
  watchOverflow: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});