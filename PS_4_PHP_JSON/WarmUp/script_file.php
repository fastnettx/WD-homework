<?php
session_start();
$uploaddir = 'Uploaded_files/';

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['sumOfNumbersFirst'])) {
    calculateTheAmount();
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['sumOfNumbersSecond'])) {
    calculateTheSecondAmount();
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['sendFile'])) {
    uploadFileToServer();
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['showFiles'])) {
    showFiles();
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['drawChessboard'])) {
    drawAchessboardсhessBoard();
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['sumOfDigits'])) {
    calculateTheSumOfTheDigits();
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['generateArray'])) {
    generateArrayOfNumbers();
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['numberOfVisits'])) {
    $_SESSION['сounter'] = 0;
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['sumOfCharacters'])) {
    countTheNumberOfCharacters();
}

function calculateTheAmount()
{
    $start = -1000;
    $end = 1000;
    $sum = 0;
    for ($i = $start; $i <= $end; $i++) {
        $sum += $i;
    }
    $_SESSION['sumOfNumbersFirst'] = $sum;
}

function calculateTheSecondAmount()
{
    $start = -1000;
    $end = 1000;
    $sum = 0;
    for ($i = $start; $i <= $end; $i++) {
        if (abs($i) % 10 == 2 || abs($i) % 10 == 3 || abs($i) % 10 == 7) {
            $sum += $i;
        }
    }
    $_SESSION['sumOfNumbersSecond'] = $sum;
}

function uploadFileToServer()
{
    global $uploaddir;
    $filename = $_FILES['uploadFile']['name'];
    $uploadfile = $uploaddir . $filename;

    if (!copy($_FILES['uploadFile']['tmp_name'], $uploadfile)) {
        $_SESSION['uploadFile'] = "не удалось скопировать $filename ";
    }
    $_SESSION['uploadFile'] = createFileList($uploaddir);
}

function showFiles()
{
    global $uploaddir;
    $_SESSION['uploadFile'] = createFileList($uploaddir);
}

function createFileList($folder)
{
    $filelistdirectory = scandir($folder);
    $line = "";
    foreach ($filelistdirectory as $items) {
        if ($items == "." || $items == "..") {
            continue;
        }
        $fileType = substr($items, strrpos($items, '.') + 1);
        $fileSize = calculateSize(filesize($folder . $items));
        if ($fileType == 'jpg' || $fileType == "jpeg" || $fileType == "png" ||
            $fileType == "gif" || $fileType == "bmp") {
            $line = $line . '<img src="' . $folder . $items . '" width="25px" height="25px" alt="' . $items . '">  ' .
                '<a  href="' . $folder . $items . '" download>' . $items . " ($fileSize) " . '</a><br />';
        } else {
            $line = $line . '<a  href="' . $folder . $items . '" download>' . $items . " ($fileSize) " . '</a><br />';
        }
    }
    return $line;
}

function calculateSize($size)
{
    $unit = ["B", "KB", "MB", "GB"];
    $exp = floor(log($size, 1024));
    return round($size / (pow(1024, $exp)), 0) . $unit[$exp];
}

function drawAchessboardсhessBoard()
{
    $size = $_POST['сhessBoard'];
    $array = explode("x", $size);
    if (checkSize($array)) {
        $str = '<div class="show-board" style="width:' . ($array[1] * 20) . 'px;">';
        for ($i = 0; $i < $array[0]; $i++) {
            for ($j = 0; $j < $array[1]; $j++) {
                $color = ($i % 2 === $j % 2) ? 'block-white' : 'block-black';
                $str = $str . '<div class="' . $color . '"></div>';
            }
        }
        $str = $str . '</div>';
        $_SESSION['сhessBoard'] = $str;
    } else {
        $_SESSION['сhessBoard'] = "Не верно указан диапазон";
    }

}

function checkSize($array)
{
    if (count($array) == 2 && preg_match(" /[0-9]/", $array[0])
        && preg_match(" /[0-9]/", $array[1])) {
        return true;
    }
    return false;
}

function calculateTheSumOfTheDigits()
{
    $number = $_POST['enteredNumber'];
    if (preg_match(" /^\d+$/", $number)) {
        $_SESSION['sumOfDigits'] = array_sum(str_split($number));
    } else {
        $_SESSION['sumOfDigits'] = "Не верно указано значение";
    }
}

function generateArrayOfNumbers()
{
    $arrayOfNumbers = array();
    for ($i = 0; $i < 100; $i++) {
        $arrayOfNumbers[$i] = rand(0, 10);
    }
    $arrayOfNumbers = array_unique($arrayOfNumbers);
    sort($arrayOfNumbers);
    $arrayOfNumbers = array_reverse($arrayOfNumbers);
    for ($i = 0; $i < count($arrayOfNumbers); $i++) {
        $arrayOfNumbers[$i] *= 2;
    }
    $_SESSION['arrayOfNumbers'] = $arrayOfNumbers;
}

function countTheNumberOfCharacters()
{
    $characters = strval($_POST['characters']);
    $line = substr_count($characters, "\n") + 1;
    $space = preg_match_all('/ /', $characters);
    $letter = iconv_strlen($characters) - ($line - 1) - $space;

    $_SESSION['numberOfcharacters'] = "Строк : " . $line . ", Пробелов : "
        . $space . ", Букв : " . $letter;
}

header("Location: index.php");






