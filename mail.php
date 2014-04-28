<?php

if($_POST) {
  $to_Email = "hello@seferdesign.com";
  $subject = 'seferdesign.com Form Submission';

  if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    $output = json_encode(array(
      'type'=>'error',
      'text' => 'Request must come from Ajax'
    ));
    die($output);
  }

  $user_Name  = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
  $user_Email = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
  $user_Phone = filter_var($_POST["userPhone"], FILTER_SANITIZE_STRING);

  if(strlen($user_Name) < 1) {
    $output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
    die($output);
  }

  if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) {
    $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
    die($output);
  }

  if(!is_numeric($user_Phone)) {
    $output = json_encode(array('type'=>'error', 'text' => 'Only numbers allowed in phone field'));
    die($output);
  }

  $headers =
  'From: '.$user_Email.'' . "\r\n" .
  'Reply-To: '.$user_Email.'' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

  $sentMail = @mail($to_Email, $subject, ' - ' . $user_Name, $headers);

  if(!$sentMail) {
    $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
    die($output);
  } else {
    $output = json_encode(array('type'=>'message', 'text' => 'Thank you! We will be in contact as soon as possible.'));
    die($output);
  }
}

?>
