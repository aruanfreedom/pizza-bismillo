<?php

$name=$_GET["name"];

$to = 'aruan_777@mail.ru'; 
        // $from - от кого 
        $from='zhenya@bismillo-pizza.kz'; 
        $title='Новый заказ';
        $mess='Имя: '.$name;
        // функция, которая отправляет наше письмо
        mail($to, $title, $mess, 'From:'.$from); 
        echo $mess; 