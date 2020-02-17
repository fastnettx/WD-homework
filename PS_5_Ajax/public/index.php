<?php
session_start();
require 'form.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chat </title>
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>
<header>
    <div class="band">
        <div class="column-1"></div>
        <div class="column-2"></div>
        <div class="column-3"></div>
        <div class="column-4"></div>
        <div class="column-5"></div>
        <div class="column-6"></div>
        <div class="column-7"></div>
        <div class="column-8"></div>
        <div class="column-9"></div>
        <div class="column-10"></div>
    </div>
</header>
<?php
if (isset($_SESSION['user'])) {
    echo $formChat;
} else {
    echo $formLogin;
}
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="./script/script.js"></script>
</body>
</html>