$(document).ready(function () {
  $("#form").submit(function (e) {
    var btn_submit = this.querySelector(".order-form__submit");
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
      error: function (response) {
        document.getElementById("result_form").style.display = "block";
        document.getElementById("result_form").classList.add("alert--danger");
        document.getElementById("result_form").querySelector(".alert__text").innerHTML = "Извинните! Сообщение не отправлено. Нет связи с сервером.";
        setTimeout(function () {
          btn_submit.disabled = false;
        }, 5000);
      }
    });

    function answer_cerver() {
      document.getElementById("result_form").style.display = "block";
      document.getElementById("result_form").classList.add(result.my_class);
      document.getElementById("result_form").querySelector(".alert__text").innerHTML = result.res;
      setTimeout(function () {
        btn_submit.disabled = false;
      }, 5000);
      return;
    };
  });
});
