let menu = document.querySelector('.header__menu button');
let navigation = document.querySelector('.navigation');
let background = document.querySelector('.background');

menu.addEventListener('click', (e) => {
  if (
    e.target.matches('.header__menu button') ||
    e.target.matches('.background')
  ) {
    navigation.classList.toggle('active');
    document.body.classList.toggle('active');
    menu.classList.toggle('close');
    background.classList.toggle('show');
  }
});

var swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper('.mySwiper-recommendation', {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.recommendation__swiper-button-next',
    prevEl: '.recommendation__swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination-recommendation',
    clickable: true,
  },
  breakpoints: {
    578: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
