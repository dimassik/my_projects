$(document).ready(function(){

$('.byhlo div').mouseenter(function(){
    $('.byhlo div').css('width', '28.3333333%');
    $(this).css('width', '43.3333333%');
    $(this).css('background-size', '100% 120%');
    $(this).css('box-shadow','none')
    $(this).children('p').css('display', 'none');
  });
  
 ///////////////////////////////////////

    $('.byhlo div').mouseleave(function(){
    $('.byhlo div').css('width', '33.33333333%');
    $(this).css('background-size','100% 100%')
    $(this).css('box-shadow','inset 300px 300px 1px rgba(26, 19, 19,0.7)')
    $(this).children('p').css('display', 'block');
  });
	


	$('.t_slider').owlCarousel({     // Каруселька 
	    items : 1,
	    pagination: true,
	    itemsDesktop: [1199,1],
	    itemsDesktopSmall : [979,1],  
	    itemsTablet : [768,1], 
	    itemsMobile : [479,1]
	});


	$('.test_slider').owlCarousel({     // Каруселька 
	    items : 1,
	    pagination: true,
	    itemsDesktop: [1199,1],
	    itemsDesktopSmall : [979,1],  
	    itemsTablet : [768,1], 
	    itemsMobile : [479,1]
	});

	$('.l_n_slider').owlCarousel({     // Каруселька 
	    items : 1,
	    pagination: false,
	    itemsDesktop: [1199,1],
	    itemsDesktopSmall : [979,1],  
	    itemsTablet : [768,1], 
	    itemsMobile : [479,1]
	});

var owl = $(".l_n_slider").data('owlCarousel');
	$('.pag1').click(function(){
		$('.pag2, .pag3').removeClass('bgcwhite');
		$(this).addClass('bgcwhite');
		owl.goTo(0);
	});
	$('.pag2').click(function(){
		$('.pag1, .pag3').removeClass('bgcwhite');
		$(this).addClass('bgcwhite');
		owl.goTo(1);
	});
	$('.pag3').click(function(){
		$('.pag2, .pag1').removeClass('bgcwhite');
		$(this).addClass('bgcwhite');
		owl.goTo(2);
	});

 
  $('.s_but :nth-child(1)').mouseenter(function(){  // service menu
    $('.s_inf').fadeOut('fast');
    $('.li_fst').fadeIn('fast');
  });
  
   $('.s_but :nth-child(2)').mouseenter(function(){
    $('.s_inf').fadeOut('fast');
    $('.li_scnd').fadeIn('fast');
  });
  
   $('.s_but :nth-child(3)').mouseenter(function(){
    $('.s_inf').fadeOut('fast');
    $('.li_thrd').fadeIn('fast');
  });
  
   $('.s_but :nth-child(4)').mouseenter(function(){
     $('.s_inf').fadeOut('fast');
    $('.li_frth').fadeIn('fast');
  });
  
   $('.s_but :nth-child(1)').mouseleave(function(){
    $('.li_fst').fadeOut('fast');
  });
  
   $('.s_but :nth-child(2)').mouseleave(function(){
    $('.li_scnd').fadeOut('fast');
  });
  
   $('.s_but :nth-child(3)').mouseleave(function(){
    $('.li_thrd').fadeOut('fast');
  });
  
   $('.s_but :nth-child(4)').mouseleave(function(){
    $('.li_frth').fadeOut('fast');
  });
  
  $('.s_but i').mouseleave(function(){
    $('.s_inf').fadeIn('fast');
  });



 
$('.p_nav :nth-child(1)').click(function(){
	$('.p_n_line').css('visibility', 'hidden')
	$(this).children('div').css('visibility', 'visible');
	$('.p_slides > div').css('display', 'none')
	$('.p_s_allworks').css('display', 'inline-block')
});

$('.p_nav :nth-child(2)').click(function(){
	$('.p_n_line').css('visibility', 'hidden')
	$(this).children('div').css('visibility', 'visible');
	$('.p_slides > div').css('display', 'none')
	$('.p_s_print').css('display', 'block')
});

$('.p_nav :nth-child(3)').click(function(){
	$('.p_n_line').css('visibility', 'hidden')
	$(this).children('div').css('visibility', 'visible');
	$('.p_slides > div').css('display', 'none')
	$('.p_s_identity').css('display', 'block')
});

$('.p_nav :nth-child(4)').click(function(){
	$('.p_n_line').css('visibility', 'hidden')
	$(this).children('div').css('visibility', 'visible');
	$('.p_slides > div').css('display', 'none')
	$('.p_s_branding').css('display', 'block')
});

$('.p_nav :nth-child(5)').click(function(){
	$('.p_n_line').css('visibility', 'hidden')
	 $(this).children('div').css('visibility', 'visible');
	$('.p_slides > div').css('display', 'none')
	$('.p_s_web').css('display', 'block')
});

$('.p_nav :nth-child(6)').click(function(){
	$('.p_n_line').css('visibility', 'hidden')
	$(this).children('div').css('visibility', 'visible');
	$('.p_slides > div').css('display', 'none')
	$('.p_s_html').css('display', 'block')
});

$('.p_nav :nth-child(7)').click(function(){
	$('.p_n_line').css('visibility', 'hidden')
	 $(this).children('div').css('visibility', 'visible');
	$('.p_slides > div').css('display', 'none')
	$('.p_s_wordpress').css('display', 'block')
});



//// details

$('.det_but :nth-child(2)').click(function(){
	$('.details .default').css('display', 'none');
	$('.details ol li').css('display', 'none');
	$('.details ol').css('display', 'block');
	$('.det_li1').css('display', 'inline-block');

});
$('.det_but :nth-child(3)').click(function(){
	$('.details .default').css('display', 'none');
	$('.details ol li').css('display', 'none');
	$('.details ol').css('display', 'block');
	$('.det_li2').css('display', 'inline-block');
	
});
$('.det_but :nth-child(4)').click(function(){
	$('.details .default').css('display', 'none');
	$('.details ol li').css('display', 'none');
	$('.details ol').css('display', 'block');
	$('.det_li3').css('display', 'inline-block');
});

$('.det_cont').mouseleave(function(){
	$('.details .default').css('display', 'block')
	$('.details ol li').css('display', 'none');
});

$('.top_menu button').click(function(){
	$('.top_menu ul').slideToggle();
});

$('.det_but').mouseenter(function(){
	$('.tip').css('display', 'block');
});
$('.det_but').mouseleave(function(){
	$('.tip').css('display', 'none');
});


$('.i_img').draggable({cursorAt:{right:0}});


// плавный скролл
$(".top_menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();
//забираем идентификатор бока с атрибута href
	 var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
	 top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top}, 1500);
});




var ss=$(window).height();
alert(ss);

});  // end all script

