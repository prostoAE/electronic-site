"use strict";

$(document).ready(function () {
  mainSliderInit();
});

function mainSliderInit() {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    // cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });
}

document.querySelector('#categories').onclick = function () {
  this.classList.toggle('active');
};

document.querySelector('.mobile-menu').onclick = function () {
  var menu = document.querySelector('.menu');
  this.classList.toggle('active');
  menu.classList.toggle('active');
};

document.querySelector('.has-children').onclick = function () {
  this.classList.toggle('open');
};

document.onclick = function (e) {
  var currentLiElement = document.querySelector('.has-children.active');
  var currentLink = document.querySelector('.has-children.active a');

  if (currentLiElement.classList.contains('open') && e.target !== currentLiElement) {
    currentLiElement.classList.toggle('open');
  }

  if (e.target === currentLink) {
    currentLiElement.classList.toggle('open');
  }
};
/*Toggle products tabs*/


$('.tab-nav__item').on('click', function () {
  var links = $('.tab-nav__item');
  var category = $(this).data('tab-link');
  var selector = '.tab-content__body[data-tab-group="' + category + '"]';
  var content = $(selector);
  $(links).removeClass('active');
  $(this).addClass('active');
  $('.tab-content__body').hide();
  $(content).fadeIn(700);
});
/*Init slider in product modal*/

function productSliderInit() {
  $('.img-slider-box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.img-nav'
  });
  $('.img-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.img-slider-box',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false
  });
}
/*Show/Hide product modal*/


$('.icons__item.view').on('click', function () {
  var productModal = $('#quickView');
  productModal.fadeIn();
  productSliderInit();
});
$('.product-modal__close').on('click', function () {
  var productModal = $('#quickView');
  productModal.fadeOut();
  setTimeout(function () {
    $('.img-slider-box').slick('unslick');
    $('.img-nav').slick('unslick');
  }, 1000);
});