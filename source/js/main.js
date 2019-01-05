$(document).ready(function () {
  // page-header
  $(".page-header")[0].classList.remove("page-header--nojs");

  $(".page-header__button-nav-toggle").click(function () {
    var block_nav = $(".page-header__block-nav")[0];

    block_nav.classList.toggle('page-header__block-nav--closed');
    block_nav.classList.toggle('page-header__block-nav--opened');
  });

});