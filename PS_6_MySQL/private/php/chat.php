<?php
session_start();
define('SERVER', 'localhost');
define('USER', "root");
define('PASSWORD', '');
define('DATABASE', 'chat');


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
    $array = [];
    $array['date'] = $milliSeconds;
    $array['name'] = $_SESSION['name'];
    $array['text'] = $text;
    echo json_encode($array);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['messagesSent'])) {
    date_default_timezone_set('Europe/Kiev');
    $date = strtotime("now");
    receiveMessages($date);
}

function writeAmessageToTheDatabase($date, $text, $user)
{
    $link = mysqli_connect(SERVER, USER, PASSWORD, DATABASE);
    $sql = "INSERT INTO message VALUES (NULL, '$date', '$user', '$text')";
    $result = mysqli_query($link, $sql);
    if ($result == false) {
        return;
    }
}

function receiveMessages($date)
{
    $link = mysqli_connect(SERVER, USER, PASSWORD, DATABASE);
    $date_msec = 1000 * ($date - 3600);
    $sql = "SELECT * FROM message WHERE `date` > '$date_msec'";
    $result = mysqli_query($link, $sql);
    $object = [];
    $number = 0;
    while (($row = mysqli_fetch_array($result)) != false) {
        $array = [];
        $array['date'] = $row[1];
        $array['name'] = $row[2];
        $array['text'] = $row[3];
        $object[$number] = $array;
        $number++;
    }
    echo json_encode($object);
}