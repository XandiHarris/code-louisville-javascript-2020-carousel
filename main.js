var slideNumber = 1;
showSlides(slideNumber);

// Arrow controls
function plusSlides(n) {
  showSlides(slideNumber += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideNumber = n);
}

// Slide Show function
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideNumber = 1
    } 
  if (n < 1) {
      slideNumber = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNumber-1].style.display = "block"; 
  dots[slideNumber-1].className += " active";
} 