$(document).ready(function(){
  new WOW().init();

  $("ul li a").smoothScroll({
    speed: 700
  });

  var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    wrapAround: true
  });

  $carousel.on( 'change.flickity', function( event, index ) {
    $(".caption").css("display", "none")
    $(".caption" + index).fadeIn("slow")
  });

  $('.hamburger').on('click', function(){
    // toggle class show on the menu
    $('.menu').toggleClass('visible');
    $('.hamburger').toggleClass('invisible');
    $('.exit-responsive').toggleClass('invisible');
  });

  $('.exit-responsive').on('click', function(){
    // toggle class show on the menu
    $('.menu').toggleClass('visible');
    $('.hamburger').toggleClass('invisible');
    $('.exit-responsive').toggleClass('invisible');
  });

});