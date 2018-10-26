<?php
  if (isset($_POST['order_name']))  { $name = $_POST['order_name']; }
  if (isset($_POST['order_tel']))   { $tel  = $_POST['order_tel']; }
  if (isset($_POST['order_email'])) { $mail = $_POST['order_email']; }

  $ip = getenv(REMOTE_ADDR);
  $time = date("H:i:s d M Y");
  $soft = getenv(HTTP_USER_AGENT);
  $url_o = getenv(HTTP_REFERER);

  $sub = "=?utf-8?b?".base64_encode("Письмо с сайта Morris")."?="; // тема письма, принудительно в ЮТФ-8
  $address = "truck@let-o.com"; // кому отправляется письмо, указание адресатов через запятую — сработает

  $headers  = "From: " . strip_tags($email) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html;charset=utf-8 \r\n"; // чтобы всё пришло в правильной кодировке!

  $mes  = "<html><body style='font-family:Arial,sans-serif;'>";
  $mes .= "<h1 style='Margin: .5em 0; font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 24px; line-height: 34px;color:#333333;'>Сайт Morris: новая заявка</h1>\r\n";
    if (isset($_POST['order_name'])){$mes .= "<p style=\"Margin: 1em 0; font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 26px;\"><strong>Представились:</strong> ".$name."<br />\r\n";}
    if (isset($_POST['order_tel'])) {$mes .= "<strong>Телефонный номер:</strong> ".$tel."<br />\r\n";}
    if (isset($_POST['order_email'])) {$mes .= "<strong>Адрес электронной почты:</strong> ".$mail."</p>\r\n";}
  $mes .= "<p style=\"Margin: 1em 0; color: #657195; font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; text-align: left;\">IP: ".$ip."<br />\r\n";
  $mes .= "<strong>Время отправки заявки:</strong> ".$time."<br />\r\n";
  $mes .= "<strong>Браузер:</strong> ".$soft."<br />\r\n";
  $mes .= "<strong>Откуда пришёл посетитель:</strong> ".$url_o."</p>\r\n";
  $mes .= "</body></html>";
  mail ($address,$sub,$mes,$headers);

  // Записать данные из формы в файл
  $fo=fopen("_orders.txt", "a");
  fwrite($fo, "
  <tr>
   <td>$time</td>
   <td>{$_POST['order_name']}</td>
   <td><a href=\"tel:{$_POST['order_tel']}\">{$_POST['order_tel']}</a></td>
   <td><a href=\"mailto:{$_POST['order_email']}\">{$_POST['order_email']}</a></td>
  </tr>\n");
  fclose($fo);
?>
