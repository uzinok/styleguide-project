$(document).ready(function () {

  $(".authorisation-form-block")[0].classList.remove("authorisation-form-block--nojs");

  $(".btn--authorisation").click(function () {
    $(".order-form--authorisation")[0].style.display = "block";
    $(".order-form--registration")[0].style.display = "none";
  });

  $(".btn--registration").click(function () {
    $(".order-form--authorisation")[0].style.display = "none";
    $(".order-form--registration")[0].style.display = "block";
  });

});
