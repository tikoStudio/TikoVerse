$(document).ready(function(){
	$('#burger__menu').click(function(){
        $(this).toggleClass('open');
        $('nav').toggleClass('nav__toggle__hidden nav__toggle__visible');
	});
});