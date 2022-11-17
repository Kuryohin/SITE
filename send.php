<?php
$f = fopen("people.txt", "a+");
fwrite($f, $_POST["name"]); 
fclose($f);
?>