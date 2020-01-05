<?php

error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);

set_include_path("." . PATH_SEPARATOR . ($UserDir = dirname($_SERVER['DOCUMENT_ROOT'])) . "/pear/php" . PATH_SEPARATOR . get_include_path());
require_once "Mail.php";

$host = "ssl://smtp.dreamhost.com";
$username = "hello@karlottagonzalez.com";
$password = "!^jv5Zw9NLLi0#Hu";
$port = "465";

$to = "hello@karlottagonzalez.com";
$email_from = "hello@karlottagonzalez.com";
$email_subject = "Message submitted to www.karlottagonzalez.com " ;
$email_address = "hello@karlottagonzalez.com";

$user_email = $_POST['email'];
$name = $_POST['name']; // Pass the Name value to the $Name variable
$comment = $_POST['message']; // Pass the Comment value to the $Comment variable

$email_body = "
            Name: $name\n
            Email: $user_email\n
            Comments: $comment";


$headers = array ('From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);

if (empty($_POST['name'])) {
    $nameErr = "Name is required.";
  } else {
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed"; 
    }
  }

if (empty($_POST['email'])) {
    $emailErr = "An e-mail address is required";
  } else {
    // check if e-mail address is well-formed
    if (!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
  }


if (PEAR::isError($mail)) {
echo("<p>" . $mail->getMessage() . "</p>");
} else {
		header("Location: https://karlottagonzalez.com/success-message-sent.html");
		exit(); // terminates the script
}
?>