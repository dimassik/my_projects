$(document).ready(function(){

	$('.header .nav>li').hover(function() { //start hover func
		$(this).children('div').toggleClass('btm_class')
										}); //end hover
var ww= 0;
var scrol_Y = 0;  // veli4ina scrolla.
var id = 0;       // id, kot. zakidivaetsa v getElementPosition().
var wh = 0; //dlina vcego doc.
var whw = 0; //dlina widimogo okna

$('.nav_btn span').click(function(){ //click navbara
	$('.navbar ul').slideToggle('fast');
});  
$('.navbar ul li').click(function(){
	$('.navbar ul').slideToggle('fast');
}); // end click navbara

function windowSize(){   // func. v kotoroi proishod9t vce vichislenia
//i zapuskaetsa pri lubom sobitii: resize,load,scroll.	
 scrol_Y = window.scrollY;// veli4ina scrolla.
if (scrol_Y>=3701) {       // zakidivaem v id-var idshnik odnogo iz
    id  = $('#sxli').attr('id');//li v nav-bare, v zavisimisti ot
    $('#percent').css('color','white');
}//veli4ini prokrytki /!!!!!c pom. .attr() beretsa stroka, kot. 
if (scrol_Y<=3700) {//lezit v id t.e. "sxli".
	id  = 'fvli';
	$('#percent').css('color','white');
}
if (scrol_Y<=2800) {
	id  = 'fthli';
	$('#percent').css('color','black');
}
if (scrol_Y<=2000) {
	id  = 'thrdli';
	$('#percent').css('color','#33ff99');
}
if (scrol_Y<=1200) {
	id  = 'scndli';
	$('#percent').css('color','black');
}
if (scrol_Y<=500) {
	id = 'fstli';
	$('#percent').css('color','red');
}
ww= $(window).width();//shirina okna
wh = $('html').height(); //dlina vcego doc.
whw = $(window).height(); //dlina widimogo okna

$('.btnt').click(function(){
	alert(ww);
});

document.getElementById('percent').innerHTML = ((100*scrol_Y)/(wh-whw)).toFixed(1)+"%";// c4itaem %scrolla

function getElementPosition(elemId) //scitaetsa w,h,l,t; polychaet 
{// v ka4estve argymenta id-var, v kot lezit stroka s nazvaniem id.
    var elem = document.getElementById(elemId);//getElementById 'beret'
    var w = elem.offsetWidth;//element po idshniky.
    var h = elem.offsetHeight;
    var l = 0;
    var t = 0;
  
    while (elem)
    {
        l += elem.offsetLeft; //elem.offsetLeft - rasstoianie do
        t += elem.offsetTop;//poditel9
        elem = elem.offsetParent;// summiryetsa rasstoianie reodite
    }//lei do <body>
    $(".progress-bar").css('left', l);//sdvigaem bar na naidennoe l
    $('.progress-bar').css('width', w);//meniaem shiriny bara ma w
  
    // return {"left":l, "top":t};
}
$(window).on(getElementPosition(id));//vizov func. .on-analog .ready
};
$(window).on('load resize scroll',windowSize);//vizov windowSize()
//pri lubom iz sobitii 'load resize scroll'.
// var a = getElementPosition(id)
// a.left
// a.top

$("a.fancyimage").fancybox();  //fancybox


$('.thumb').hover(function(){ //images 
	$('.thumb').not(this).toggleClass('thumb_op');
	$('.search').toggleClass('db');
	$(this).append($('.search'));
});

// плавный скролл
$(".header").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
	event.preventDefault();
//забираем идентификатор бока с атрибута href
	 var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
	 top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс .stop() dl9 otmeni predidyshei animacii
$('body,html').stop().animate({scrollTop: top}, 1500);
});



}); // end all script