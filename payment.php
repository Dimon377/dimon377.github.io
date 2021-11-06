<?php 
    $public_key = 'sandbox_i64419081244';
    //указываем приватный ключ liqpay
    $private_key = 'sandbox_mtXEpt1jEBuMTpe3V6nedaF0iQT4MyYnNfMfyDMZ';
    $sender_name = $_POST['sender_name'];
    $sender_phone = $_POST['sender_phone'];
    //подключаем библиотеку liqpay
    require("./LiqPay.php");
    //создаем обьект класса LiqPay
    $liqpay = new LiqPay($public_key, $private_key);
$html = $liqpay->cnb_form(array(
'action'         => 'pay',
'amount'         => '1',
'currency'       => 'USD',
'description'    => 'description text',
'sender_name'   =>  $_POST['name'],
'order_id'       => 'order_id_1',
'version'        => '3'
));
?>