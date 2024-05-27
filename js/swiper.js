const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
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
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });