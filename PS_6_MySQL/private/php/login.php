<?php
session_start();
define('SERVER', 'localhost');
define('USER', "root");
define('PASSWORD', '');
define('DATABASE', 'chat');


unset($_SESSION['nameErr']);
unset($_SESSION['passwordErr']);

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['submit'])) {
    checkForm();
    header('location: ../../public/index.php');
}

function checkForm()
{
    $name = $_SESSION['name'] = ($_POST['name']);
    $password = ($_POST['password']);

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
    $link = mysqli_connect(SERVER, USER, PASSWORD, DATABASE);
    $sql = "SELECT * FROM `users` WHERE login = '$name'";

    if ($link == false) {
        return false;
    }
    $result = mysqli_query($link, $sql);

    if ($result->num_rows > 0) {
        return false;
    }
    return true;
}

function checkPassword($name, $password)
{
    $link = mysqli_connect(SERVER, USER, PASSWORD, DATABASE);
    $sql = "SELECT * FROM `users` WHERE login = '$name'";
    $result = mysqli_query($link, $sql);
    $row = mysqli_fetch_array($result);
    if (password_verify($password, $row['password'])) {
        return true;
    }
    return false;
}

function writeToFile($name, $password)
{
    $link = mysqli_connect(SERVER, USER, PASSWORD, DATABASE);
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users VALUES (NULL, '$name', '$password_hash')";
    $result = mysqli_query($link, $sql);
    if ($result == false) {
        return;
    }
}


