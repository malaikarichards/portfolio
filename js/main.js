// var width = $('.ticker').width(),
//   containerwidth = $('.ribbon').width(),
//   left = containerwidth;

// $(document).ready(function (e) {
//   function tick() {
//     if (--left < -width) {
//       left = containerwidth;
//     }
//     $(".ticker").css("margin-left", left + "px");
//     setTimeout(tick, 16);
//   }
//   tick();
// });

const swiper = new Swiper('.ticker', {
  spaceBetween: 40,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 1,
    waitForTransition: true,
    stopOnLastSlide: false,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  speed: 2000,
  loop: true,
  slidesPerView: "auto",
});