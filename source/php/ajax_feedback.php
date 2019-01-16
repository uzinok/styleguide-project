<?php
if($_POST['name'] == true && $_POST['email'] == true && $_POST['text']) {
    $error_text = "<span>Сообщение не отправлено.<br> Ошибка, не переданны данные.<br />Отправьте сообщение на email: uzinok@yandex.ru</span>";
    $main_text = "<span>Сообщение отправлено.<br>При первой возможности отвечу.<br />Спасибо.</span>";

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
} else {
    $result = array(
        'res' => "<span>Сообщение не отправлено.<br>Сервер не получил данные.<br />Все поля в форме должны быть заполнены.</span>",
        'my_class' => "alert--danger"
    );
}
echo json_encode($result);
?>