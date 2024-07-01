"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var div = document.createElement('div');
  var root = document.documentElement;
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  var btnsPopup = document.querySelectorAll('.btn-popup');
  var overlay = document.querySelector('.overlay');
  var btnClose = document.querySelector('.popup__close');

  function showPopup(overlay) {
    document.body.classList.toggle('show');
    root.classList.toggle('show');
    overlay.classList.toggle('show');

    if (document.body.classList.contains("show")) {
      document.body.style.paddingRight = "".concat(scrollWidth, "px");
    } else {
      document.body.style.paddingRight = '0px';
    }
  }

  btnsPopup.forEach(function (item) {
    item.addEventListener('click', function () {
      showPopup(overlay);
    });
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      showPopup(overlay);
    }

    ;
  });
  btnClose.addEventListener("click", function () {
    showPopup(overlay);
  });
  var slider = new Swiper('.slider .swiper-container', {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    keyboard: {
      enabled: true
    },
    effect: "fade",
    crossFade: true,
    speed: 900,
    autoplay: {
      delay: 4000
    },
    pagination: false,
    navigation: {
      prevEl: '.slider .swiper-button-prev',
      nextEl: '.slider .swiper-button-next'
    }
  });
});