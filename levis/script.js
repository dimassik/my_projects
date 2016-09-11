$(document).ready(function(){
  var i=1;

$('.text2 a, .shop a').mouseenter(function() {
$(this).css('background-color', '#1a8cff');
});

  $('.nav a, .slider input').mouseenter(function()   {
 $(this).addClass('blue');
 $(this).css('color','white');
  });


  $('.nav a, .slider input').mouseleave(function(){
  $(this).removeClass('blue');
  $('.text input').css('color','#40c3b4');
  });
 

  $('.text2 a, .shop a').mouseleave(function(){
  $(this).css('background-color', '#40c3b4');
  });

  
  $('.nav1 ol').slideToggle('fast');
  $('.nav1 h4').click(function(){  
  $('.nav1 ol').slideToggle('fast');
  $('.ss i').toggleClass('fa-arrow-down');
  i++;
    if(i%2!==0)
      {
 $('.nav1').css('height', '38px');
 $('.nav1').css('margin-bottom', '0px');

      }
   if(i%2==0)
     {
 $('.nav1').css('height', '332px'); 
 $('.nav1').css('margin-bottom', '3px');

     }
  }); 
  
  
 $('.nav1  a').mouseenter(function()    
  {  $(this).addClass('blue');            
   });
   
   $('.nav1 a').mouseleave(function()    
   {
 $(this).removeClass('blue');
   });

$('.slider').owlCarousel({
    items : 1,
    pagination: true,
    itemsDesktop: [1199,1],
    itemsDesktopSmall : [979,1],  
    itemsTablet : [768,1], 
    itemsMobile : [479,1],
});


$('.bottom-slider').owlCarousel({
    items : 3,
    pagination: false,
    itemsDesktop: [1199,3],
    itemsDesktopSmall : [979,3],  
    itemsTablet : [768,3], 
    itemsMobile : [479,3],
});




var bottom_slider = $('.bottom-slider').data('owlCarousel');
  $('.but img').click(function() {
    bottom_slider.prev();
  });
 $('.butr img').click(function() {
    bottom_slider.next();
  });


});