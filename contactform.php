<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];


  $mailTo = "eunchristopher@gmail.com"; //where the email is sending it to
  $headers = "From: ".$mailFrom;  //Who is sending the email
  $txt = "You have received an e-mail from ".$name.".\n"."e-mail: ".$mailFrom.
  "\n"."Phone Number: ".$subject."\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.php?mailsend");


}
