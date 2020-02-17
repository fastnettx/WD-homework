$(document).ready(function () {
    setTimeout(receiveMessages);

    setTimeout(function run() {
        updateContent();
        setTimeout(run, 100000);
    }, 100000);
    //setInterval(updateContent, 10000);

    $("#Send").click(function () {
        let message = replaceWithSmile($("#text").val());
        if (message !== "") {
            sendForm(message);
            $('#text').val("");
        }

        lowerDown();
        return false;
    });

    $("#text").keypress(function (e) {
        if (e.keyCode == 13) {
            $('#Send').click();
            return false;
        }
    });

    function sendForm(message) {
        let dateMs = Date.now();
        $.post(
            '../private/php/chat.php',
            {
                ajaxSent: 'sent',
                text: message,
                date: dateMs
            },
            function (msg) {
                $('.chat').append("<div class='message'>" + msg + "</div>");
            }
        );
    }

    function receiveMessages() {
        let dateMs = Date.now();
        $.post(
            '../private/php/chat.php',
            {
                messagesSent: 'messages'
            },
            function (msg) {
                $('.chat').append(msg);
                lowerDown();
            }
        );
    }

    function replaceWithSmile(message) {
        return replacedMessage = message.replace(/:\)/g, "<img src=\"images/smile.jpg\">").replace(/:\(/g, "<img src=\"images/sadness.jpg\">");
    }

    function updateContent() {
        $('.chat').empty();
        receiveMessages();
    }

    function lowerDown() {
        $(".chat").scrollTop($(".chat").prop('scrollHeight') - $(".chat").height());
    }
});