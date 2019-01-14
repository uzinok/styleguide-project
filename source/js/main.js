$(document).ready(function () {
  // PAGE-HEADER
  // LINK
  $("a[href^='" + document.location.pathname + "']").css({
    color: "#00aeef"
  });
  // TOGGLE NAV
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
      slider_progress(currentSlide);
      slider_item[currentSlide].classList.toggle('slider__item--active');
    }
    // slider_progress
    function slider_progress(currentSlide) {
      var slider__progress_block = slider.querySelector('.slider__progres-block');
      slider__progress_block.innerText = "";
      var width_progres = 1 / slider_item.length * 100;
      console.log(width_progres);

      for (var np = 0; np < slider_item.length; np++) {
        // val_slider_progres = val_slider_progres + "<div class=\"slider_progres\"></div>";
        var slider_progres = document.createElement("div");
        slider_progres.classList.add("slider__progres");
        slider_progres.style.width = width_progres + "%";
        if (np <= currentSlide) {
          slider_progres.style.background = "#dad7e8";
        }
        slider__progress_block.appendChild(slider_progres);
      };
    };
    slider_progress(currentSlide);
  };
  // END SLIDER
  // SCROLL
  $('[data-goto]').on('click', function (e) {
    e.preventDefault();

    var that = $(this).data('goto');

    $('html, body').animate({
      scrollTop: $(that).offset().top
    });
  });
  // END SCROLL
});
