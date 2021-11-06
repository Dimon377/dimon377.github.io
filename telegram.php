<?php
 
$name = $_POST['name'];
$phone = $_POST['phone'];
$program = $_POST['choose_program'];
$teacher = $_POST['choose_teacher'];
$time = $_POST['choose_time'];

$token = "1325976476:AAGEYo5FrJ6fYFnM1DKDwjBGTUH8upLjGAs";
 
$chat_id = "-487407757";
 
$arr = array(
  'Ім’я клієнта: ' => $name,
  'Телефон: ' => $phone,
  'Програма: ' => $program,
  'Викладач: ' => $teacher,
  'Зручний час для дзвінка: ' => $time
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>
