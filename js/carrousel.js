/* --- carrousel --- */
var slideIndex = 1;
var slides = document.getElementsByClassName("link__latest__stories");
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

next.addEventListener('click', plusSlides);
prev.addEventListener('click', minusSlides);

showSlides(slideIndex);

function plusSlides() {
        if(slideIndex <= slides.length) {
			showSlides(++slideIndex);
        }
}
function minusSlides() {
	if(slideIndex <= slides.length) {
		showSlides(--slideIndex);
		console.log(slideIndex);
	}
}
function currentSlide() {
  showSlides(slideIndex);
}


function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for ( i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var myVar = setInterval(myTimer, 500);

function myTimer() {
  if(slideIndex <= slides.length) {
    showSlides(++slideIndex);
      }
}


