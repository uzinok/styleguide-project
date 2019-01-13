$(document).ready(function () {
  // PAGE-HEADER

  $("a[href^='" + document.location.pathname + "']").css({color:"#00aeef"});

  $(".page-header")[0].classList.remove("page-header--nojs");
  $(".page-header__button-nav-toggle").click(function () {
    var block_nav = $(".page-header__block-nav")[0],
      nav_toggle = this;
    block_nav.classList.toggle('page-header__block-nav--closed');
    block_nav.classList.toggle('page-header__block-nav--opened');
    nav_toggle.classList.toggle('page-header__button-nav-toggle--closed');
    nav_toggle.classList.toggle('page-header__button-nav-toggle--opened');
  });

  // END PAGE-HEADER
  // ALERT
  $(".alert__btn--js").click(function () {
    this.parentNode.style.display = "none";
  });
  // END ALERT
  // SLIDER
  var slider = $(".slider");
  for (var n = 0; n < slider.length; n++) {
    my_slider(slider[n]);
  };

  function my_slider(slider) {
    slider.classList.remove("slider--nojs");
    var slider_item = slider.querySelectorAll(".slider__item");
    var currentSlide = 0;
    slider.style.height = slider_item[currentSlide].offsetHeight + "px";
    var next = slider.querySelector('.slider__next');
    var previous = slider.querySelector('.slider__previous');
    next.onclick = function () {
      nextSlide();
    };
    previous.onclick = function () {
      previousSlide();
    };

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function previousSlide() {
      goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
      slider_item[currentSlide].classList.toggle('slider__item--active');
      currentSlide = (n + slider_item.length) % slider_item.length;
      slider.style.height = slider_item[currentSlide].offsetHeight + "px";
      slider_item[currentSlide].classList.toggle('slider__item--active');
    }
  };
  // END SLIDER

});
