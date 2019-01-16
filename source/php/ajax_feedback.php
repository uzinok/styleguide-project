<?
$name_user = $_POST['name'];
$email_user = $_POST['email'];
$message = $_POST['text'];

$error_text = "<span class=\"red\">Сообщение не отправлено.<br> Ошибка, не переданны данные.<br />Отправьте сообщение на email: uzinok@yandex.ru</span>";
$main_text = "<span class=\"green\">Сообщение отправлено.<br>При первой возможности отвечу.<br />Спасибо;</span>";

if(mail("uzinok@yandex.ru", "письмо от uzinok.ru", "Имя: ".$name_user."\nСообщение: ".$message."\nE-mail для связи: ".$email_user)) {
    $result = array(
    'res' => $main_text,
    'my_class' => "alert--success"
    );
} else {
  $result = array(
    'res' => $error_text,
    'my_class' => "alert--danger"
  );
}

echo json_encode($result);
?>