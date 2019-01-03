$(document).ready(function () {
  var page_header_container = document.querySelector('.page-header__container'),
      page_header__toggle = document.querySelector('.page-header__toggle');

  page_header_container.classList.remove('page-header__container--nojs');

  page_header__toggle.addEventListener('click', function () {
    if (page_header_container.classList.contains('page-header__container--closed')) {
      page_header_container.classList.remove('page-header__container--closed');
      page_header_container.classList.add('page-header__container--opened');
    } else {
      page_header_container.classList.add('page-header__container--closed');
      page_header_container.classList.remove('page-header__container--opened');
    }
  });
});

$(document).ready(function () {
  $('.js-input-number').parent(".js-input-number-block").append('<button class="js-button-number-minus button-number-minus"><span class="visually-hidden">меньше</span></button>');
  $('.js-input-number').parent(".js-input-number-block").append('<button class="js-button-number-plus button-number-plus"><span class="visually-hidden">больше</span></button>');

  $(".js-button-number-minus").hover(function () {
    var input_number = $(this).siblings(".js-input-number").hover();
  });
});

$(document).ready(function () {
  var input_disabled = $("input:disabled");
  var block_input_disabled = input_disabled.parent();
  for (var i = 0, len = block_input_disabled.length; i < len; i++) {
    block_input_disabled[i].classList.add("input-text--disabled");
  }

  var select_disabled = $("select:disabled");
  var block_select = select_disabled.parent();
  for (var i = 0, len = block_select.length; i < len; i++) {
    block_select[i].classList.add("select--disabled");
  }
});

$(document).ready(function () {
  $(".js-button-number-minus").click(function () {
    var input_number = $(this).siblings(".js-input-number");
    var attr_max = input_number.attr("max") || null;
    var attr_min = input_number.attr("min") || null;
    var value_number = input_number.val();
    if (+value_number > +attr_max) {
      return input_number.val(attr_max);
    }
    if (attr_min == null) {
      return input_number.val(+input_number.val() - 1);
    } else if (+value_number > +attr_min) {
      return input_number.val(+input_number.val() - 1);
    } else if (+value_number < +attr_min) {
      return input_number.val(attr_min);
    }
  });
  $(".js-button-number-minus").mouseenter(function () {
    var input_number = $(this).siblings(".js-input-number");
    input_number[0].classList.add("hover");
  });
  $(".js-button-number-minus").mouseleave(function () {
    var input_number = $(this).siblings(".js-input-number");
    input_number[0].classList.remove("hover");
  });

  $(".js-button-number-plus").click(function () {
    var input_number = $(this).siblings(".js-input-number");
    var attr_max = input_number.attr("max") || null;
    var attr_min = input_number.attr("min") || null;
    var value_number = input_number.val();
    if (+value_number < +attr_min) {
      return input_number.val(attr_min);
    }
    if (attr_max == null) {
      return input_number.val(+input_number.val() + 1);
    } else if (+value_number < +attr_max) {
      return input_number.val(+input_number.val() + 1);
    } else if (+value_number > +attr_max) {
      return input_number.val(attr_max);
    }
  });
  $(".js-button-number-plus").mouseenter(function () {
    var input_number = $(this).siblings(".js-input-number");
    input_number[0].classList.add("hover");
  });
  $(".js-button-number-plus").mouseleave(function () {
    var input_number = $(this).siblings(".js-input-number");
    input_number[0].classList.remove("hover");
  });
});
