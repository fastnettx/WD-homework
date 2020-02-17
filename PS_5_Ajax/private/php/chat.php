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
    $text = $_POST['text'];
    writeAmessageToTheDatabase($milliSeconds, $text, $_SESSION['name']);
    $seconds = round($milliSeconds / 1000, 0);
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
        $keySec = round($key / 1000, 0);
        if ($keySec > ($date - 3600)) {
            echo('<div class="message">[' . date("H:i:s", $keySec) . ']  ' . '<span class="fatty">' . $array[$key][1] .
                '</span>' . ':  ' . $array[$key][0] . '</div>');
        }
    }
    file_put_contents('../database/log.json', json_encode($array));
}