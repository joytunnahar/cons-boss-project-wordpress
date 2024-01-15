
$(document).ready(function(){
   // hamburger menu
   hamburger = document.querySelector('.hamburger');
   nav = document.querySelector('nav');
   
   hamburger.onclick = function(){
       nav.classlist.toggle('active');
   }

// slick slider banner
$('.banner-slider').slick({
    dots:true,
    arrows:true,
    infinite:true,
    adaptiveHeight:true,
    speed:1000,
    drag:true,
    slidesToShow:1,
    prevArrow:'<i class="fa-solid fa-arrow-left"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right"></i>'
   
})



})
 



