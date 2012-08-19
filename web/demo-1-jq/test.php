<?php

isset($_POST["test_string"]) or die("bad value");

$str = mysql_real_escape_string($_POST["test_string"]);

echo 'You sent "'.$str.'".';

?>