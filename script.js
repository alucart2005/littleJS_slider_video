const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video');
const slideShowText = document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');

let index = 0;

function toggleMenu() {
  const menuIcon = document.querySelector('.menuIcon');
  const navbar = document.getElementById('navbar');
  menuIcon.classList.toggle('active');
  navbar.classList.toggle('active');
}

function nextSlide() {
  slides[index].classList.remove('active');
  slidesText[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
  slidesText[index].classList.add('active');
  console.log(index + "Next");
}
function prevSlide() {
  slides[index].classList.remove('active');
  slidesText[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
  slidesText[index].classList.add('active');
  console.log(index + "Prev");
}




