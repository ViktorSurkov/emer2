<?

$adminemail="info@emerbelt.me";

$date=date("d.m.y");

$time=date("H:i");

$headers = "MIME-Version: 1.0" . "\n";
$headers .= "From: MINI <info@emerbelt.me>" . "\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\n";
//---------------------------------------------------------------------- //


$email=$_POST['email'];


$msg="
<p>E-mail: $email</p>\n
";

mail("$adminemail", "MINI Feedback", "$msg","$headers");

echo 1;

?>
