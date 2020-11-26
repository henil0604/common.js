<?php

$curPath = $_POST['curPath'];
$targetPath = $_POST['targetPath'];

rename($curPath, $targetPath);
