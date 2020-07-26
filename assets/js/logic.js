$(document).ready(function(){
	$('.burger-container').click(function(){
        $(this).toggleClass('open');
        $('.menu-navbar').toggleClass('open');
        $('body').toggleClass('scroll');
	});
});

var controller = new ScrollMagic.Controller();
start = new ScrollMagic.Scene({triggerElement: "#start"}).triggerHook(0.5).on("enter",(e)=>{$('.share-side').addClass('open').removeClass('close')}).on("leave",(e)=>{$('.share-side').addClass('close').removeClass('open')}).addTo(controller);
start = new ScrollMagic.Scene({triggerElement: "#end"}).triggerHook(1).on("enter",(e)=>{$('.share-side').addClass('close').removeClass('open')}).on("leave",(e)=>{$('.share-side').addClass('open').removeClass('close')}).addTo(controller);