<?php
header('Content-Type: text/html; charset=utf-8');

    if ($_POST['user_total_num'] == "12") {
        

        if($_POST['name']==true && $_POST['email']==true && $_POST['text']) {
            $name_user=$_POST['name'];
            $email_user=$_POST['email'];
            $message=$_POST['text'];

            if(mail("uzinok@yandex.ru", "письмо от uzinok.ru", "Имя: ".$name_user."\nСообщение: ".$message."\nE-mail для связи: ".$email_user)) {
                print "<h1>Сообщение отправлено.</h1><h2>При первой возможности отвечу.</h2><h3>Спасибо.</h3>";
            } else {
                print "<h1>Сообщение не отправлено.</h1><h2>Ошибка на сервере.</h2><h3>Отправьте сообщение на email: uzinok@yandex.ru</h3>";
            }
        } else {
            print "<h1>Сообщение не отправлено.</h1><h2>Сервер не получил данные.</h2><h3>Все поля в форме должны быть заполнены.</h3>";
        }
    } else {
        print "<h1>Сообщение не отправлено.</h1><h2>Вы не решили пример.</h2><h3>Все поля в форме должны быть заполнены.</h3>";
    }


?>
