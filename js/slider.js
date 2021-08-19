const swiper = new Swiper('.swiper-container', {
    
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 400,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    slidesPerView: 3,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  