let currentSlide = 0;

function changeSlide(slideIndex) {
  const carousel = document.getElementById('carousel');
  const totalSlides = document.querySelectorAll('.media-carousel-slide').length;

  // Prevent out-of-bound values
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  // Update currentSlide index
  currentSlide = slideIndex;

  // Calculate the offset for sliding effect
  const offset = -100 * currentSlide;

  // Apply the sliding effect by translating the carousel
  carousel.style.transform = `translateX(${offset}%)`;
}

// Automatically cycle slides every 5 seconds
setInterval(() => {
  changeSlide(currentSlide + 1);
}, 5000);

// Initialize the first slide to be active
window.onload = () => {
  changeSlide(0);
};