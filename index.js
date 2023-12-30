var swiper = new Swiper(".mySwiper", {
    loop: true, // 循环模式选项
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed:1000,
    autoplay: {
      delay: 1200,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });