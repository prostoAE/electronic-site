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
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });
}

document.querySelector('#categories').onclick = function () {
  this.classList.toggle('active');
};

if (document.querySelector('#categories-news')) {
  document.querySelector('#categories-news').onclick = function () {
    this.classList.toggle('active');
  };
}

document.querySelector('.mobile-menu').onclick = function () {
  var menu = document.querySelector('.menu');
  this.classList.toggle('active');
  menu.classList.toggle('active');
};
/*document.querySelector('.has-children').onclick = function () {
    this.classList.toggle('open');
};*/

/*document.onclick = function (e) {
    const currentLiElement = document.querySelector('.has-children.active');
    const currentLink = document.querySelector('.has-children.active a');

    if (currentLiElement.classList.contains('open') && e.target !== currentLiElement) {
        currentLiElement.classList.toggle('open');
    }

    if (e.target === currentLink) {
        currentLiElement.classList.toggle('open');
    }
};*/

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
  setProductCount();
});
$('.product-modal__close').on('click', function () {
  var productModal = $('#quickView');
  productModal.fadeOut();
  setTimeout(function () {
    $('.img-slider-box').slick('unslick');
    $('.img-nav').slick('unslick');
  }, 1000);
});
/*
* Set product Count
* @return void
* */

function setProductCount() {
  var control = document.querySelectorAll('.count');

  for (var i = 0; i < control.length; i++) {
    control[i].onclick = function () {
      var input = document.querySelector('.count-input');

      if (this.classList.contains('minus')) {
        if (input.value <= 1) {
          input.value = 1;
        } else {
          input.value--;
        }
      } else if (this.classList.contains('plus')) {
        input.value++;
      }
    };
  }
} // Count Time


function makeTimer() {
  var endTime = new Date('july  28, 2020 12:33:30');
  var endTime = Date.parse(endTime) / 1000;
  var now = new Date();
  var now = Date.parse(now) / 1000;
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

  if (hours < '10') {
    hours = '0' + hours;
  }

  if (minutes < '10') {
    minutes = '0' + minutes;
  }

  if (seconds < '10') {
    seconds = '0' + seconds;
  }

  $('#days').html(days);
  $('#hour').html(hours);
  $('#min').html(minutes);
  $('#sec').html(seconds);
}

setInterval(function () {
  makeTimer();
}, 300);

if (document.querySelector('#slider-range')) {
  $(function () {
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function slide(event, ui) {
        $('#amount').val(ui.values[0] + 'грн. - ' + ui.values[1] + 'грн.');
      },
      stop: function stop(event, ui) {
        alert('Stop!!!');
      }
    });
    $('#amount').val($('#slider-range').slider('values', 0) + 'грн. - ' + $('#slider-range').slider('values', 1) + 'грн.');
  });
}

if (document.querySelector('#accordion')) {
  $("#accordion").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: 0
  });
}