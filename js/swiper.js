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