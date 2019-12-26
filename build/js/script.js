'use strict';

$(document).ready(function () {

  // Header bg color
  let $headerMain = $('.header');
  let $hero = $('.hero');

  $(window).scroll(function () {
    let top = $(this).scrollTop();

    // $header.toggleClass('active', top > $header.height());
    $headerMain.toggleClass('active', top > ($hero.height() * 0.15));
  });


  // Initialize Slick Slider for section Page

  function setProgress1(index) {
    var calc = ((index + 1) / ($slider1.slick('getSlick').slideCount)) * 100;

    $progressBar1
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
  }

  var $slider1 = $('.hero__slider');
  var $progressBar1 = $('.hero__progress');

  $slider1.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setProgress1(nextSlide);
  });

  $('.hero__slider').slick({
    // autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true,
    // verticalSwiping: true,
    swipe: true,
    nextArrow: $('.hero__arrow-wrapright'),
    prevArrow: $('.hero__arrow-wrapleft'),
    // responsive: [
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   }
    // ]
  });

  // Animation in section Hero
  $(".hero__slider").on("beforeChange", function() {

    $('.hero__card-title').removeClass('animated fadeInDown').hide();
    $('.hero__card-subtitle').removeClass('animated fadeInUp').hide();
    $('.hero__card-button').removeClass('animated fadeInUp').hide();
    setTimeout(() => {    
      $('.hero__card-title').addClass('animated fadeInDown').show();
      $('.hero__card-subtitle').addClass('animated fadeInUp').show();
      $('.hero__card-button').addClass('animated fadeInUp').show();

    }, 100);

  })

  setProgress1(0);


  // Menu in Header
  let $btn = $('.header__mobile-line');
  let $navMenu = $('.header__fade');

  $('.header__mobile-btn').on('click', function () {
    if (!($btn.hasClass('active'))) {
      $btn.addClass('active');
      $navMenu.addClass('active');
      $('body').addClass('active');
      $('.header__right-text span').toggleClass('passive');
    } else {
      $btn.removeClass('active');
      $navMenu.removeClass('active');
      $('body').removeClass('active');
      $('.header__right-text span').toggleClass('passive');
    }

  });

  // Wowjs
  new WOW().init();

  // // Form validate
  // $("#validate1").validate({
  //   errorClass: "input_error",
  //   rules: {
  //     email1: {
  //       required: true,
  //       email: true
  //     },
  //     name1: {
  //       required: true,
  //       minlength: 2
  //     },
  //     phone1: {
  //       required: true,
  //       minlength: 11
  //     }
  //   },
  // });

  // Mask input
  jQuery(function ($) {
    $('.phone').mask('+9 (999) 999-9999');
  });

  // Slick slider in section Test
  $('.test__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.test__arrow-right'),
    prevArrow: $('.test__arrow-left'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // Anchor to top
  $(window).scroll(function () {

    if ($(this).scrollTop() > 500 )  {

      $('#toTop').addClass('active');

    } else {

      $('#toTop').removeClass('active');

    }

  });

  $('#toTop').click(function () {

    $('body,html').animate({ scrollTop: 0 }, 800);

  });
});