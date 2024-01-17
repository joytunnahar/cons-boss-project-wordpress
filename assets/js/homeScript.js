
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

// about-play-btn popup
$('.about-play-btn').magnificPopup({
    type:'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
      
        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
      
            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }
      
            src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
          },
          
      
          // you may add here more sources
      
        },
      
        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
})

// gellary popup
$('.gallery-image').magnificPopup({
    type:'image',
    gallery: {
        enabled: true, 
      }
})



})
 



