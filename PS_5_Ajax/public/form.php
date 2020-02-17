<?php

$formLogin = '<section class="form-one">
    <h1>Easy Chat</h1>
    <form class="section-form-one" action="../private/php/login.php" method="post" >
        <label for="name">Enter your name</label>
        <input type="text" id="name" name="name" placeholder="John Doe"  autocomplete="off" 
        value="' . (isset($_SESSION['name']) ? $_SESSION['name'] : "") . '">
        <div class="error">' . (isset($_SESSION['nameErr']) ? $_SESSION['nameErr'] : "") . '
            
        </div>
        <label for="password">Enter your password</label>
        <input type="password" id="password" name="password" placeholder="•••••" >
        <div class="error">' . (isset($_SESSION['passwordErr']) ? $_SESSION['passwordErr'] : "") . '
            
        </div>
        <button type="submit" id="submit" name="submit">
            Submit
        </button>
        <div class="shadow"></div>
    </form>
</section>';

$formChat = '<section class="form-two" >
   
    <h1>Easy Chat</h1>
    <form autocomplete="off" class="section-form-two" id="ajax_form" action="../private/php/chat.php" method="post">
     <div class="log-out">
        <button type="submit" name="log-out">
          Log out
        </button>
    </div>
        <div class="chat" >
        </div>
        <div class="chat-send">
            <input class="send-text" type="text" id="text" name="text">
            <input type="submit" id="Send" name="Send" value="Send">
        </div>
    </form>
</section>';

