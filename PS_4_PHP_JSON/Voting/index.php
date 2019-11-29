<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>voting</title>
    <link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>
<form action="voting_result.php" method="post">
    <h1>Анонімне online опитування</h1>
    <div class="title">
        Чи влаштовує Вас діючий президент?
    </div>
    <div class="content">
        <div>
            <input type="radio" name="radio" value="Так" id="firstAnswer">
            <label for="firstAnswer">Так</label>
        </div>
        <div>
            <input type="radio" name="radio" value="Більше Так, чим Ні" id="secondAnswer">
            <label for="secondAnswer">Більше Так, чим Ні</label>
        </div>
        <div>
            <input type="radio" name="radio" value="Більше Ні, чим Так" id="thirdAnswer">
            <label for="thirdAnswer">Більше Ні, чим Так</label>
        </div>
        <div>
            <input type="radio" name="radio" value="Ні" id="fourthAnswer">
            <label for="fourthAnswer">Ні</label>
        </div>
        <div>
            <input type="radio" name="radio" value="Ще не визначився" id="fifthAnswer">
            <label for="fifthAnswer">Ще не визначився</label>
        </div>
    </div>
    <div class="show">
        <input type="submit" name="toVote" value="Проголосувати">
    </div>
    <div class="thoice">
        <?= isset($_SESSION['theThoice']) ? $_SESSION['theThoice'] : '' ?>
    </div>
</form>
</body>
</html>