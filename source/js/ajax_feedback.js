$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "php/ajax_feedback.php",
      data: form_data,
      success: function (response) {
        result = jQuery.parseJSON(response);

        return answer_cerver();
      }
    });

    function answer_cerver() {
      document.getElementById("result_form").style.display = "block";
      document.getElementById("result_form").classList.add(result.my_class);
      document.getElementById("result_form").querySelector(".alert__text").innerHTML = result.res;
      return;
    };
  });
});
