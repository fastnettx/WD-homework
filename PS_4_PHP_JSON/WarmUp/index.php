<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>PS4_WarmUp</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<section>
    <form action="script_file.php" method="post">
        <h3>Посчитать сумму чисел от -1000 до 1000 </h3>
        <input type="submit" name="sumOfNumbersFirst" value="Показать">
        <div class="result">Сумма чисел равна:
            <?= isset($_SESSION['sumOfNumbersFirst']) ? $_SESSION['sumOfNumbersFirst'] : '' ?>
        </div>
    </form>
</section>
<section>
    <form action="script_file.php" method="post">
        <h3>Посчитать сумму чисел от -1000 до 1000, суммируя только числа которые заканчиваются на 2,3, и 7 </h3>
        <input type="submit" name="sumOfNumbersSecond" value="Показать">
        <div class="result">Сумма чисел равна:
            <?= isset($_SESSION['sumOfNumbersSecond']) ? $_SESSION['sumOfNumbersSecond'] : '' ?>
        </div>
    </form>
</section>

<section>
    <form action="script_file.php" method="post" enctype="multipart/form-data">
        <h3>Работа с файлами </h3>
        <label for="file"></label>
        <div>
            <input class="file" type="file" name="uploadFile"><br>
        </div>

        <input type="submit" name="sendFile" value="Загрузить">
        <div class="result">
            <div class="show-links">
                <?= isset($_SESSION['uploadFile']) ? $_SESSION['uploadFile'] : '' ?>
            </div>
        </div>
    </form>
</section>
<section>
    <form action="script_file.php" method="post">
        <h3>Укажите размер шахматной доски </h3>
        <input type="text" name="сhessBoard" placeholder="3x3"><br>
        <input type="submit" name="drawChessboard" value="Показать">
        <div class="result">
            <?php
            if (isset($_SESSION['сhessBoard'])) {
                echo $_SESSION['сhessBoard'];
            } else '';
            ?>
        </div>
    </form>
</section>
<section>
    <form action="script_file.php" method="post">
        <h3>Найти сумму цифр введённого числа</h3>
        <input type="text" name="enteredNumber"><br>
        <input type="submit" name="sumOfDigits" value="Показать">
        <div class="result">Сумма цифр равна:
            <?= isset($_SESSION['sumOfDigits']) ? $_SESSION['sumOfDigits'] : '' ?>
        </div>
    </form>
</section>
<section>
    <form action="script_file.php" method="post">
        <h3>Генерация массива рандомных целых чисел от 1 до 10</h3>
        <input type="submit" name="generateArray" value="Показать">
        <div class="result">Массив :
            <?php
            if (isset($_SESSION['arrayOfNumbers'])) {
                print_r($_SESSION['arrayOfNumbers']);
            } else '';
            ?>
        </div>
    </form>
</section>
<section>
    <form action="script_file.php" method="post">
        <h3>Счетчик посещений </h3>
        <div class="result">Количество посещений :
            <?= isset($_SESSION['сounter']) ? $_SESSION['сounter']++ : $_SESSION['сounter'] = 1; ?>

        </div>
    </form>
</section>
<section>
    <form action="script_file.php" method="post">
        <h3>Введите текст</h3>
        <div>
            <textarea name="characters"></textarea>
        </div>
        <input type="submit" name="sumOfCharacters" value="Показать">
        <div class="result">Количество символов:
            <?= isset($_SESSION['numberOfcharacters']) ? $_SESSION['numberOfcharacters'] : '' ?>
        </div>
    </form>
</section>

</body>
</html>