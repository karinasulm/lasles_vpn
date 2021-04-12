$(function() {
  
    // Slider Box
    $('.box__inner').slick({
      infinite: true,
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      arrows: false,
      swipe: false,
      responsive: [
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            centerMode: true,
            infinite: true,
            dots: true,
          }
        }
      ]
    });

    // Slider Reviews
    $('.reviews__slider').slick({
      slidesToScroll: 1,
      variableWidth: true,
      dots: true,
      arrows: true,
      prevArrow: '<div class="slick-prev"><div class="arrow-prev"></div></div>',
      nextArrow: '<div class="slick-next"><div class="arrow-next"></div></div>'
    });

        // Fixed Header

    var header = $('#header');
    var introH = $('#intro').innerHeight();
    var scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        
        if ( scrollOffset >= introH/3 ) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }

    }
    
    // Burger Menu

    $('#burger-toggle').on('click', function(event) {

      event.preventDefault();

      $(this).toggleClass('active');
      $('#nav').toggleClass('active');

    });

    $('.nav__item').on('click', function(event) {

      event.preventDefault();

      $(this).toggleClass('active');
      $('#nav').toggleClass('active');

    });

    // Smooth Scroll

    $('[data-scroll]').on('click', function(event) {
        
      event.preventDefault();
      
      var $this = $(this);
      var blockId = $this.data('scroll');
      var blockOffset = $(blockId).offset().top;

      $('#nav a').removeClass('active');
      $this.addClass('active');

      $('html, body').animate({
          scrollTop: blockOffset
      }, 500);

      $('#nav').removeClass('active');

  });

  // Form

  $('#sign_in_button').on('click', function(event) {

    event.preventDefault();

    $('#sign_in_form').removeClass('invisible');

  });

  $('#close_in').on('click', function(event) {

    event.preventDefault();

    $('#sign_in_form').addClass('invisible');

  });

  $('#sign_up_button').on('click', function(event) {

    event.preventDefault();

    $('#sign_up_form').removeClass('invisible');

  });

  $('#close_up').on('click', function(event) {

    event.preventDefault();

    $('#sign_up_form').addClass('invisible');

  });

  // Box

  $('#btn_free').on('click', function(event) {

    event.preventDefault();

    $('.box__item').removeClass('active');
    $('#box_free').addClass('active');

  });

  $('#btn_standart').on('click', function(event) {

    event.preventDefault();

    $('.box__item').removeClass('active');
    $('#box_standart').addClass('active');

  });

  $('#btn_premium').on('click', function(event) {

    event.preventDefault();

    $('.box__item').removeClass('active');
    $('#box_premium').addClass('active');

  });

  });