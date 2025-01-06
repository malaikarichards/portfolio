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

const ticker = new Swiper('.ticker', {
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

const projectSwiper = new Swiper('.project-swiper', {
  direction: 'vertical',
  scrollbar:  {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 40
  },
  slidesPerView: 1,
  loop: true,
  autoHeight: true,
});

$(document).ready(function(){
  let popoverTriggerList = [].slice.call( 
    document.querySelectorAll('[data-bs-toggle="popover"]')) 
  
  let popoverList = 
  popoverTriggerList.map(function (popoverTriggerEl) { 
    return new bootstrap.Popover(popoverTriggerEl) 
  }) 
});