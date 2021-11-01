var mixer = mixitup('.portfolio');

$(document).ready(function(){
    $('.venobox').venobox(); 
});

// fixed menu 
$(window).scroll(function(){
   if($(window).scrollTop()>250){
      $(".menu").addClass("fixed__menu")
   }else{
      $(".menu").removeClass("fixed__menu")
     
   }
})


// scroll top

$('.scroll-top').click(function(){
   $("html,body").animate({
    scrollTop:0
   },2000);
});


// testimonial part

$('.testimonial-slider').slick({
     arrow:true,
    asNavFor: ".testimonial-img-slider",
    prevArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
    nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
});

$('.testimonial-img-slider').slick({
   arrows:false,
   asNavFor:".testimonial-slider",
   responsive: [
      {
        breakpoint: 769,
        settings: {    
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {      
          slidesToShow: 1
        }
      }
    ]
});


$(".i__p__fixed").click(function(){
   $(this).fadeOut()
   $(".i__p__abs").fadeIn()
})
$(".i__p__abs").click(function(){
   $(this).fadeOut()
   $(".i__p__fixed").fadeIn()
})