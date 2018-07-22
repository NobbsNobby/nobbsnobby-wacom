let searchBtn = document.querySelector('.-js-search'),
    searchInput = document.querySelector('.search__input'),
    searchForm = document.querySelector('.search__form'),
    playBtn = document.querySelector('.-js-play-btn'),
    videoBg = document.querySelector('.-js-video-bg'),
    video = document.getElementById('video'),
    burger = document.querySelector('.burger'),
    navigation = document.querySelector('.nav'),
    preloader = document.querySelector('.preloader');

window.onload = () => {
  setTimeout(() => {
    preloader.classList.add('-type-disable');
    document.body.classList.remove('no-scroll');
  }, 1000);
};


searchBtn.addEventListener('click', () => {
  searchForm.classList.contains('-js-visible') ?
      searchForm.classList.remove('-js-visible') :
      searchForm.classList.add('-js-visible');
  searchInput.classList.contains('-js-visible') ?
      searchInput.classList.remove('-js-visible') :
      searchInput.focus();
  searchInput.classList.add('-js-visible')
});
searchInput.addEventListener('blur', () => {
  searchForm.classList.remove('-js-visible');
  searchInput.classList.remove('-js-visible');
  searchInput.value = '';
  searchInput.blur();
});

// Video
playBtn.addEventListener('click', (e) => {
  if (video.paused) {
    video.play();
    videoBg.style.visibility = 'hidden';
    e.target.classList.add('-js-hidden');
  } else {
    video.pause();
    video.currentTime = 0;
    videoBg.style.visibility = 'visible';
    e.target.classList.remove('-js-hidden');
  }
});

// Slider
let mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  }
});

let mySwiper3 = new Swiper('.posts-slider', {
  wrapperClass: 'posts-slider__wrapper',
  slideClass: 'posts-slider__slide',
  navigation: {
    nextEl: '.posts-slider-button-right',
    prevEl: '.posts-slider-button-left',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
});

let mySwiper2 = new Swiper('.post-slider', {
  wrapperClass: 'post-slider__wrapper',
  slideClass: 'post-slider__slide',
  pagination: {
    el: '.post-slider__pagination'
  },
  loop: true,
  autoplay: {
    delay: 5000,
  }
});
if(wW = window.innerWidth < 768) {
  mySwiper.destroy(false);
}
window.addEventListener('resize', () => {
  let wW = window.innerWidth;
  if(wW > 768 ) {
    mySwiper.update();
    mySwiper3.update();
  } else if(wW < 560 && wW > 540) {
    mySwiper3.update();
  }
});

//  Burger
burger.addEventListener('click', (e) => {
  e.stopPropagation();

  if (!burger.classList.contains('-type-active')) {
    burger.classList.add('-type-active');
    navigation.classList.add('-type-visible');
    document.body.classList.add('no-scroll');

  } else {
    burger.classList.remove('-type-active');
    navigation.classList.remove('-type-visible');
    document.body.classList.remove('no-scroll');
  }
});


