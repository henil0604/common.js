<?php


$path = $_POST['path'];


$fp = fopen($path, "wb");
fclose($fp);
