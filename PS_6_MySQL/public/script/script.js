$(document).ready(function () {
    setTimeout(receiveMessages);

    setTimeout(function run() {
        updateContent();
        setTimeout(run, 100000);
    }, 60000);
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
        let post = $.post(
            '../private/php/chat.php',
            {
                ajaxSent: 'sent',
                text: message,
                date: dateMs
            },
            function (msg) {
                let message = JSON.parse(msg);
                transform_an_array(message);
            }
        );
    }

    function transform_an_array(message) {
        console.log(message);
        let date = new Date(Number(message['date']));
        let name = message['name'];
        let text = message['text'];
        console.log(date.getSeconds());
        $('.chat').append("<div class='message'>" + "[" + convert_time(date) + "] <span class=\'fatty\'>" +
            name + "</span> " + text + "</div>");
    }

    function convert_time(date) {
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        return hours + ':' + minutes + ':' + seconds;
    }


    function receiveMessages() {
        let dateMs = Date.now();
        $.post(
            '../private/php/chat.php',
            {
                messagesSent: 'messages'
            },
            function (msg) {
                let message = JSON.parse(msg);
                for (let i = 0; i < message.length; i++) {
                    transform_an_array(message[i]);
                }
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