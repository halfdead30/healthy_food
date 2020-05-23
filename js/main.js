window.onload = function() {
  var overlayer = document.querySelector('#overlayer');
  overlayer.classList.remove('show');
}

window.onscroll = function() {
  var header = this.document.querySelector('.header-nav');
  header.classList.toggle('sticky', window.scrollY > 0);
}

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var toggle = document.querySelector('.toggle');

function showMenu(e) {
  var menu = document.querySelector('.header-menu');

  toggle.classList.toggle('active');
  menu.classList.toggle('show');
}

toggle.addEventListener('click', showMenu);