'use strict';

$(document).ready(function() {


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
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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
});