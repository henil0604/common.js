<?php


function array_remove(&$array, $item)
{
    $index = array_search($item, $array);
    if ($index === false)
        return false;
    array_splice($array, $index, 1);
    return true;
}
