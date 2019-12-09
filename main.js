// create a reassignable variable to hold the current slide number
let currentSlide = 1;

// create a function called showSlide that takes 1 argument called slideNumber
function showSlide(slideNumber) {
  // select all DOM elements with the class 'slides' and store them in a variable
  const slides = document.querySelectorAll('.slide');
  // select all DOM elements with the class 'dot' and store them in a variable
  const dots = document.querySelectorAll('.dot');

  // if the slide number is greater than total number of slides, set it to 1
  if (slideNumber > slides.length) {
    currentSlide = 1;
  }
  // if the slide number is less than 0, set it to the number of the last slide
  if (slideNumber < 1) {
    currentSlide = slides.length;
  }

  // loop over all of the slides and set them to display: none
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  // loop over all the dots and remove the 'active' class
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  // set the current slide to display block
  slides[currentSlide - 1].style.display = 'block';
  // add the 'active' class to the current dot
  dots[currentSlide - 1].classList.add('active');
}

// write a function to increase the current slide number by 1
function increaseSlide() {
  currentSlide += 1;
  showSlide(currentSlide);
}

// write a function to decrease the current slide number by 1
function decreaseSlide() {
  currentSlide -= 1;
  showSlide(currentSlide);
}

// write a function to set the current slide to a specific number
function specificSlide(slideNumber) {
  currentSlide = slideNumber;
  showSlide(currentSlide);
}

// don't forget to call your showSlide function on initial page load
showSlide(currentSlide);

/********** ALTERNATIVE SOLUTIONS

// 1 nested ternary operator would also work in lieu of the 2 if statements
currentSlide =
  slideNumber > slides.length
    ? 1
    : slideNumber < 1
    ? slides.length
    : slideNumber;


// for loops would work instead of the forEach expressions
// className.replace could be used instead of classList.add
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = 'none';
}

for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(' active', '');
}

*********************************/
