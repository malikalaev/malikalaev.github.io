<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['nameFormphp'];
$email = $_POST['emailFormphp'];
$comment = $_POST['comment'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'yalgloo22200@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'yalgloss22'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('yalgloo22200@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('fagov65681@runchet.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'у него какие-то слова';
$mail->Body    = '' .$name . ' отправил сообщение!' . "<br>" . " Вот его почта " .$email. "<br>" . " Сказал вот это: " . "<br> ".$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>