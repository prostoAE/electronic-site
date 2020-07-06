$(document).ready(function () {
    if (document.querySelector('.slider')) {
        mainSliderInit();
    }
    if (document.querySelector('.gallery-thumbs')) {
        singleProductSliderInit();
    }
    if (document.querySelectorAll('.count')) {
        setProductCount();
    }

    if (document.querySelector('#product-tabs')) {
        $('#product-tabs').tabs();
    }
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
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
}

function singleProductSliderInit() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        effect: 'flip',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
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

if (document.querySelector('#productSort')) {
    document.querySelector('#productSort').onclick = function () {
        this.classList.toggle('active');
    };
}

document.querySelector('.mobile-menu').onclick = function () {
    const menu = document.querySelector('.menu');

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
    const links = $('.tab-nav__item');
    const category = $(this).data('tab-link');
    const selector = '.tab-content__body[data-tab-group="' + category + '"]';
    const content = $(selector);

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
        infinite: false,
    });
}

/*Show/Hide product modal*/
$('.icons__item.view').on('click', function () {
    const productModal = $('#quickView');

    productModal.fadeIn();
    productSliderInit();
});
$('.product-modal__close').on('click', function () {
    const productModal = $('#quickView');

    productModal.fadeOut();

    setTimeout(() => {
        $('.img-slider-box').slick('unslick');
        $('.img-nav').slick('unslick');
    }, 500);
});

/*
* Set product Count
* @return void
* */
function setProductCount() {
    let control = document.querySelectorAll('.count');

    for (let i = 0; i < control.length; i++) {
        control[i].onclick = function () {
            let input = this.parentElement.querySelector('.count-input');

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
}

// Count Time
function makeTimer() {
    var endTime = new Date('july  28, 2020 12:33:30');
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
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
            slide: function (event, ui) {
                $('#amount').val(ui.values[0] + 'грн. - ' + ui.values[1] + 'грн.');
            },
            stop: function (event, ui) {
                alert('Stop!!!')
            }
        });
        $('#amount').val($('#slider-range').slider('values', 0) +
            'грн. - ' + $('#slider-range').slider('values', 1) + 'грн.');
    });
}

if (document.querySelector('#accordion')) {
    $('#accordion').accordion({
        icons: false,
        heightStyle: 'content',
        collapsible: true,
        active: 0
    });
}
