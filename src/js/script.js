$(document).ready(function(){
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 1000,
    prevArrow: '<button type="button" class="prev"><img src="icons/prev_arrow.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="next"><img src="icons/next_arrow.png" alt="arrow"></button>',
  });
});