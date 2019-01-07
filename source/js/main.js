$(document).ready(function () {
  // page-header
  $(".page-header")[0].classList.remove("page-header--nojs");

  $(".page-header__button-nav-toggle").click(function () {
    var block_nav = $(".page-header__block-nav")[0],
      nav_toggle = this;

    block_nav.classList.toggle('page-header__block-nav--closed');
    block_nav.classList.toggle('page-header__block-nav--opened');

    nav_toggle.classList.toggle('page-header__button-nav-toggle--closed');
    nav_toggle.classList.toggle('page-header__button-nav-toggle--opened');
  });
  // slider
  $(".slider")[0].classList.remove("slider--nojs");

  var slides = document.querySelectorAll('.slider__item');
  var currentSlide = 0;
  document.querySelectorAll('.slider')[0].style.height = slides[currentSlide].offsetHeight + "px";

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].classList.toggle('slider__item--active');
    currentSlide = (n + slides.length) % slides.length;
    document.querySelectorAll('.slider')[0].style.height = slides[currentSlide].offsetHeight + "px";
    slides[currentSlide].classList.toggle('slider__item--active');
  }

  var next = document.querySelectorAll('.slider__next')[0];
  var previous = document.querySelectorAll('.slider__previous')[0];

  next.onclick = function () {
    nextSlide();
  };
  previous.onclick = function () {
    previousSlide();
  };
// ALERT
  $(".alert__btn--js").click(function () {
    this.parentNode.style.display = "none";
  });
});
