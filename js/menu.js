/* --- menu --- */
$(document).ready(function(){
	$('#burger__menu').click(function(){
    $(window).scrollTop(0);
    $(this).toggleClass('open');
    $('nav').toggleClass('nav__toggle__hidden nav__toggle__visible');
    $('header').toggleClass('header__extended');
    $('.header__inner').toggleClass('header__inner2');
    $('html').toggleClass('overflow');
	});
});
