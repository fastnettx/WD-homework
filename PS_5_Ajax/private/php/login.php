<?php
session_start();
unset($_SESSION['nameErr']);
unset($_SESSION['passwordErr']);

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['submit'])) {
    checkForm();
    header('location: ../../public/index.php');
}

function checkForm()
{
    $name = $_SESSION['name'] = $_POST['name'];
    $password = $_POST['password'];

    if (strlen($name) < 2 || preg_match('/[ ]/', $name)) {
        $_SESSION['nameErr'] = "The name must not contain spaces and contain more than one character";
        return;
    }

    if (strlen($password) < 2 || preg_match('/[ ]/', $password)) {
        $_SESSION['passwordErr'] = "The password must not contain spaces and contain more than one character";
        return;
    }

    if (checkUser($name)) {
        writeToFile($name, $password);
    }

    if (!checkPassword($name, $password)) {
        $_SESSION['nameErr'] = "This user already exists, check the password";
        return;
    }
    $_SESSION['user'] = $name;
}

function checkUser($name)
{
    $string = file_get_contents('../database/user.json');
    $array = json_decode($string, TRUE);

    if (array_key_exists($name, $array)) {
        return false;
    }
    return true;
}

function checkPassword($name, $password)
{
    $string = file_get_contents('../database/user.json');
    $array = json_decode($string, TRUE);

    if ($array[$name] == $password) {
        return true;
    }
    return false;
}

function writeToFile($name, $password)
{
    $string = file_get_contents('../database/user.json');
    $array = json_decode($string, TRUE);
    $array[$name] = $password;
    file_put_contents('../database/user.json', json_encode($array));
}


