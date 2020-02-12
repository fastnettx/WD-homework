<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['log-out'])) {
    unset($_SESSION['name']);
    unset($_SESSION['user']);
    header('location: ../../public/index.php');
}


if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['ajaxSent'])) {
    date_default_timezone_set('Europe/Kiev');
    $milliSeconds = $_POST['date'];
    $seconds = round($milliSeconds / 1000, 0);
    $text = $_POST['text'];
    writeAmessageToTheDatabase($seconds, $text, $_SESSION['name']);
    $dateHis = date("H:i:s", $seconds);
    echo('[' . $dateHis . '] <span class="fatty">' . $_SESSION['name'] . '</span>' . ':  ' . $_POST['text']);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['messagesSent'])) {
    date_default_timezone_set('Europe/Kiev');
    $date = strtotime("now");
    receiveMessages($date);
}

function writeAmessageToTheDatabase($date, $text, $user)
{
    $file = file_get_contents('../database/log.json');
    $array = json_decode($file, TRUE);
    $array[$date] = [$text, $user];
    file_put_contents('../database/log.json', json_encode($array));
}

function receiveMessages($date)
{
    $file = file_get_contents('../database/log.json');
    $array = json_decode($file, TRUE);
    foreach ($array as $key => $value) {
        if ($key > ($date - 3600)) {
            echo('<div class="message">[' . date("H:i:s", $key) . ']  ' . '<span class="fatty">' . $array[$key][1] .
                '</span>' . ':  ' . $array[$key][0] . '</div>');
        }
    }
    file_put_contents('../database/log.json', json_encode($array));
}