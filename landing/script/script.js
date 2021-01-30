$(document).ready(function(){
$('.slider').slick({
    slidesToShow:3,
    infinite:false,
    dots:true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.header__burger').click(function(event){
	$('.header__burger, .header__menu, .header__list').toggleClass('active');
});
});