<?php
//the subject
$sub = "Test email";
//the message
$msg = "It works!";
//recipient email here
$rec = "robertkaruiyi@gmail.com";
//send email
mail($rec,$sub,$msg);
?>