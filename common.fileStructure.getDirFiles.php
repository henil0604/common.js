<?php

require 'common.js.php.utils.php';

$path = $_POST['path'];

$returnDate = [];

// Open a directory, and read its contents
if (is_dir($path)) {
    if ($dh = opendir($path)) {
        while (($file = readdir($dh)) !== false) {
            array_push($returnDate, $file);
        }
        closedir($dh);
    }
}

array_remove($returnDate, ".");
array_remove($returnDate, "..");


echo json_encode($returnDate);
