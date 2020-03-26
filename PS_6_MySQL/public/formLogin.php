<section class="form-one">
    <h1>Easy Chat</h1>
    <form class="section-form-one" action="../private/login.php" method="post">
        <label for="name">Enter your name</label>
        <input type="text" id="name" name="name" placeholder="John Doe" autocomplete="off"
               value="<?= isset($_SESSION['name']) ? $_SESSION['name'] : "" ?>">
        <div class="error"><?= isset($_SESSION['nameErr']) ? $_SESSION['nameErr'] : "" ?>
        </div>
        <label for="password">Enter your password</label>
        <input type="password" id="password" name="password" placeholder="•••••">
        <div class="error"><?= isset($_SESSION['passwordErr']) ? $_SESSION['passwordErr'] : "" ?>
        </div>
        <button type="submit" id="submit" name="submit">
            Submit
        </button>
        <div class="shadow"></div>
    </form>
</section>