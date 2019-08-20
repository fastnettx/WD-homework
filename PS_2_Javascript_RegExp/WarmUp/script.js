/**
 * The function calculates the sum of numbers that end in 2,3 and 7.
 */
function summFunction() {
    var number_one = +document.getElementById('first_number').value;
    var number_two = +document.getElementById('second _number').value;
    console.log((number_one)%7);
    console.log(number_two);
    if (number_one > number_two) {
        document.getElementById('result_summ').innerText = " Введен не коректный диапазон."
    } else {
        var sum = 0;
        for (var i = number_one; i <= number_two; i++) {
            if (Math.abs(i) % 10 === 2 || Math.abs(i) % 10 === 3 || Math.abs(i) % 10 === 7) {
                sum += i;
            }
        }
        document.getElementById('result_summ').innerText = sum;
    }
}

/**
 * A function that converts time in seconds to the format hh: mm: ss
 */
function recountTime() {
    var time_in_seconds = +document.getElementById('time_in_seconds').value;
    if (time_in_seconds < 0) {
        document.getElementById('result_time_in_format').innerText = "Введите положительное значение"
    } else {
        var hour = Math.floor(time_in_seconds / 3600);
        var minute = Math.floor((time_in_seconds - hour * 3600) / 60);
        var second = time_in_seconds - hour * 3600 - minute * 60;
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        document.getElementById('result_time_in_format').innerText = "" + hour + ":" + minute + ":" + second;
    }
}

/**
 *A function that translates the time in the format hh: mm: ss, in seconds.
 */
function convertTimeToSeconds() {
    var full_time = document.getElementById('full_time').value;
    var regex1 = /\d\d[\:][0-5]\d[\:][0-5]\d/;
    if (regex1.test(full_time)) {
        var time_array = full_time.split(":");
        document.getElementById('result_full_time_in_format').innerText =
            +time_array[0] * 3600 + +time_array[1] * 60 + +time_array[2];
    } else {
        document.getElementById('result_full_time_in_format').innerText = "Введен не коректный шаблон";
    }
}

/**
 * A function that calculates the time elapsed between dates
 */
function dateInterval() {
    var data_one = document.getElementById('first_data').value;
    var data_two = document.getElementById('second _data').value;
    var Data_1 = new Date(data_one);
    var Data_2 = new Date(data_two);
    if (data_one <= data_two) {
        let year = 0;
        let month = 0;
        let day = 0;
        let hour = 0;
        let minuts = 0;
        if (Data_2.getMinutes() - Data_1.getMinutes() >= 0) {
            minuts = Data_2.getMinutes() - Data_1.getMinutes();
        } else {
            minuts = 60 + Data_2.getMinutes() - Data_1.getMinutes();
            hour--;
        }
        if (Data_2.getHours() - Data_1.getHours() >= 0 && hour > 0) {
            hour += (Data_2.getHours() - Data_1.getHours());
        } else {
            hour += (24 + Data_2.getHours() - Data_1.getHours());
            day--;
        }
        if (Data_2.getUTCDate() - Data_1.getUTCDate() >= 0 && day > 0) {
            day += (Data_2.getUTCDate() - Data_1.getUTCDate());
        } else {
            day += (30 + Data_2.getUTCDate() - Data_1.getUTCDate());
            month--;
        }
        if (Data_2.getMonth() - Data_1.getMonth() >= 0 && month > 0) {
            month += (Data_2.getMonth() - Data_1.getMonth());
        } else {
            month += (12 + Data_2.getMonth() - Data_1.getMonth());
            year--;
        }
        year += (Data_2.getFullYear() - Data_1.getFullYear());
        document.getElementById('result_full _data').innerText =
            year + " year(s), " + month + " month(s), "
            + day + " day(s), " + hour + " hour(s), " + minuts + " minute(s), " + "0 second(s).";
    } else {
        document.getElementById('result_full _data').innerText = "не верно указан период";
    }
}

/**
 * The function that draws a chessboard depending on the given parameters
 */
function drawAchessboard() {
    var the_size = document.getElementById('chess_board').value;
    var regex = /\d[x]\d/i;
    if (!regex.test(the_size)) {
        document.getElementById('draw_a_chessboard').innerText = "Введен не коректный шаблон";
    } else {
        var array = the_size.split(/[x]/i);
        var width = +array[0];
        var height = +array[1];
        if (width <= 25 && height <= 25) {
            var elem = document.createElement("div");
            elem.style.height = height * 30 + 'px';
            elem.style.width = width * 30 + 'px';
            elem.style.background = 'white';
            elem.style.display = 'flex';
            elem.style.flexWrap = 'wrap';
            for (var i = 0; i < height; i++) {
                for (var j = 0; j < width; j++) {
                    var cell = document.createElement("div");
                    if (i % 2 === j % 2) {
                        cell.style.background = 'black';
                        cell.style.height = '30px';
                        cell.style.width = '30px';
                        elem.appendChild(cell);
                    } else {
                        cell.style.background = 'white';
                        cell.style.height = '30px';
                        cell.style.width = '30px';
                        elem.appendChild(cell);
                    }
                }
            }
            document.getElementById('draw_a_chessboard').appendChild(elem);
        } else {
            document.getElementById('draw_a_chessboard').innerText = "Введите значение стороны меньше 25";
        }
    }
}

/**
 * Function that clears an area
 */
function clearBoard() {
    document.getElementById('draw_a_chessboard').innerText = '';
}

/**
 * Function that clears an area
 */
function clearURL() {
    document.getElementById('result_link_text').innerText = '';
}

/**
 *A form that checks whether links are entered, deletes incorrect data,
 *  and displays them sorted alphabetically by a list of links
 */
link_check.addEventListener("focusout", function (dataChecking) {
    document.getElementById('result_link_text').innerText = '';
    var textarea = document.getElementById('link_check').value;
    if (textarea === "") {
        document.getElementById('result_link_text').innerText = "Ничего не введено";
    } else {
        var array_list_unformatted = textarea.split(",");
        var regexURL = /(^(((http|https):\/\/)|(www\.)))[\w]+([\/\-\.]{1}[a-z0-9]+)/i;
        var regexIP = /^(1?\d?\d|25[0-5]|2[0-4]\d)\.(1?\d?\d|25[0-5]|2[0-4]\d)\.(1?\d?\d|25[0-5]|2[0-4]\d)/;
        var array_list = [];
        for (var i = 0; i < array_list_unformatted.length; i++) {
            array_list_unformatted[i] = array_list_unformatted[i].replace(/(^\s+|\s+$)/g, '');
            if (regexURL.test(array_list_unformatted[i])) {
                array_list.push(array_list_unformatted[i].replace(/^(((http|https):\/\/)|(www\.))/g, ''));
            } else if (regexIP.test(array_list_unformatted[i])) {
                array_list.push(array_list_unformatted[i]);
            }
        }
        array_list.sort();
        var arrayArea = document.createElement("div");
        arrayArea.style.display = 'flex';
        arrayArea.style.flexDirection = 'column';
        for (var i = 0; i < array_list.length; i++) {
            var text_url = document.createElement("a");
            text_url.text = array_list[i];
            text_url.target = '_blank';
            if (/^\d/.test(array_list[i])) {
                text_url.href = array_list[i];
            } else {
                text_url.href = 'https\:\/\/' + array_list[i];
            }
            arrayArea.appendChild(text_url);
        }
        document.getElementById('result_link_text').appendChild(arrayArea);
    }
})

/**
 *Function that selects a regular expression
 */
function convertToRegularExpression() {
    var textarea = document.getElementById('plain_text').value;
    var reg = document.getElementById('regular_expression').value;
    let regexp = new RegExp(reg, "g");
    document.getElementById('regular_expression_in_text').innerHTML =
        textarea.replace(regexp, '<mark>$&</mark>');
}







