$(document).ready(function () {
  // ajax_feedback
  $("#form").submit(function (e) {
    var btn_submit = this.querySelector(".order-form__submit"),
      valid_name_text = /[a-z]/ig,
      val_name = $(".order-form__control[name=\"name\"]").val(),
      val_text = $(".order-form__control[name=\"text\"]").val();
    if (val_name.match(valid_name_text) || val_text.match(valid_name_text)) {
      console.log("hello");
      document.getElementById("result_form").style.display = "block";
      if (document.getElementById("result_form").classList.contains("alert--success")) document.getElementById("result_form").classList.remove("alert--success");
      document.getElementById("result_form").classList.add("alert--danger");
      document.getElementById("result_form").querySelector(".alert__text").innerHTML = "Извинните! Я русский человек и разговариваю на русском языке.";
      return false;
    };
    btn_submit.disabled = true;
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "php/ajax_feedback.php",
      data: form_data,
      success: function (response) {
        result = jQuery.parseJSON(response);

        return answer_cerver();
      },
      error: function () {
        document.getElementById("result_form").style.display = "block";
        document.getElementById("result_form").classList.add("alert--danger");
        if (document.getElementById("result_form").contains("alert--success")) document.getElementById("result_form").classList.remove("alert--success");
        document.getElementById("result_form").querySelector(".alert__text").innerHTML = "Извинните! Сообщение не отправлено. Нет связи с сервером.";
        setTimeout(function () {
          btn_submit.disabled = false;
        }, 5000);
      }
    });

    function answer_cerver() {
      document.getElementById("result_form").style.display = "block";
      if (document.getElementById("result_form").classList.contains("alert--danger")) document.getElementById("result_form").classList.remove("alert--danger");
      if (document.getElementById("result_form").classList.contains("alert--success")) document.getElementById("result_form").classList.remove("alert--success");
      document.getElementById("result_form").classList.add(result.my_class);
      document.getElementById("result_form").querySelector(".alert__text").innerHTML = result.res;
      setTimeout(function () {
        btn_submit.disabled = false;
      }, 5000);
      return;
    };
  });

  // end ajax_feedback

  // TOGGLE NAV
  $(".page-header")[0].classList.remove("page-header--nojs");
  $(".page-header__button-nav-toggle").click(function () {
    var block_nav = $(".page-header__block-nav")[0],
      nav_toggle = this;
    block_nav.classList.toggle("page-header__block-nav--closed");
    block_nav.classList.toggle("page-header__block-nav--opened");
    nav_toggle.classList.toggle("page-header__button-nav-toggle--closed");
    nav_toggle.classList.toggle("page-header__button-nav-toggle--opened");
  });
  // END PAGE-HEADER
  // ALERT
  $(".alert__btn--js").click(function () {
    this.parentNode.style.display = "none";
    if (this.parentNode.classList.contains("alert--danger")) this.parentNode.classList.remove("alert--danger");
    if (this.parentNode.classList.contains("alert--warning")) this.parentNode.classList.remove("alert--warning");
    if (this.parentNode.classList.contains("alert--info")) this.parentNode.classList.remove("alert--info");
    if (this.parentNode.classList.contains("alert--success")) this.parentNode.classList.remove("alert--success");
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

    var height_slider = 0;
    for (var nsi = 0; nsi < slider_item.length; nsi++) {
      if (height_slider < slider_item[nsi].offsetHeight) {
        height_slider = slider_item[nsi].offsetHeight;
      }
    };

    slider.style.height = height_slider + "px";

    var next = slider.querySelector(".slider__next");
    var previous = slider.querySelector(".slider__previous");
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
      slider_item[currentSlide].classList.toggle("slider__item--active");
      currentSlide = (n + slider_item.length) % slider_item.length;
      slider_progress(currentSlide);
      slider_item[currentSlide].classList.toggle("slider__item--active");
    }
    // slider_progress
    function slider_progress(currentSlide) {
      var slider__progress_block = slider.querySelector(".slider__progres-block");
      slider__progress_block.innerText = "";
      var width_progres = 1 / slider_item.length * 100;

      for (var np = 0; np < slider_item.length; np++) {
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
  $("[data-goto]").on("click", function (e) {
    e.preventDefault();

    var that = $(this).data("goto");

    $("html, body").animate({
      scrollTop: $(that).offset().top - -1
    }, 500);
  });
  // END SCROLL

  //  SCROLL PAGE
  window.onmousemove = function (event) {
    var pupils = document.getElementsByClassName("pupils"),

      x = event.pageX,
      y = event.pageY;

    for (var n = 0; n < pupils.length; n++) {
      getCoords(pupils[n], x, y);
    }

    function getCoords(pupils, x, y) {
      var box = pupils.getBoundingClientRect();
      var y_pupils = box.top + pageYOffset,
        x_pupils = box.left + pageXOffset;

      x = (x - x_pupils) / 500;
      y = (y - y_pupils) / 500;
      if (x >= 1) x = 0.9;
      if (y >= 1) y = 0.9;
      if (x <= -1) x = -0.9;
      if (y <= -1) y = -0.9;
      var translate = "translate(" + x + "px," + y + "px)";
      $(pupils).css({
        "transform": translate
      });
    };
  };

  var innerHeight = document.documentElement.clientHeight,
    index_paralax = 1.2,
    doc_height = document.documentElement.offsetHeight,
    height_paralax = doc_height / index_paralax + innerHeight + "px";

  $("#body_background--paralax").css({
    "height": height_paralax
  });

  var up_down_arrow = $(".up-down-arrow__btn")[0];

  $(".up-down-arrow__btn").click(function () {
    up_down_arrow.classList.remove("up-down-arrow__btn--up");
    $("html, body").animate({
      scrollTop: $("body").offset().top
    }, 500);
  });

  window.onscroll = function (event) {

    var pageY = window.pageYOffset || document.documentElement.scrollTop;

    requestAnimationFrame(function () {
      translate = "translate(" + 0 + "px, -" + pageY / index_paralax + "px)";
      $("#body_background--paralax").css({
        "transform": translate
      });
      var translate = "translate(" + 0 + "px, -" + pageY / (index_paralax / 0.4) + "px)";
      $("header").css({
        "transform": translate
      });
      var translate_f = -((pageY + innerHeight) - doc_height) / (index_paralax / 0.4);
      translate_f = "translate(" + 0 + "px, " + translate_f + "px)";
      $("#link").css({
        "transform": translate_f
      });
    });

    if (pageY > innerHeight) {
      if (!up_down_arrow.classList.contains("up-down-arrow__btn--up")) up_down_arrow.classList.add("up-down-arrow__btn--up");
    } else if (pageY < innerHeight) {
      if (up_down_arrow.classList.contains("up-down-arrow__btn--up")) up_down_arrow.classList.remove("up-down-arrow__btn--up");
    }

  };
  //  END SCROLL PAGE
});
