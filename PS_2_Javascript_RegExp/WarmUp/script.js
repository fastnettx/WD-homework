/**
 * The function calculates the sum of numbers that end in 2,3 and 7.
 */
function summFunction() {
    const number_one = +document.getElementById('first_number').value;
    const number_two = +document.getElementById('second _number').value;
    if (number_one > number_two) {
        document.getElementById('result_summ').innerText = " Введен не коректный диапазон."
    } else {
        let sum = 0;
        for (let i = number_one; i <= number_two; i++) {
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
    const time_in_seconds = +document.getElementById('time_in_seconds').value;
    if (time_in_seconds < 0) {
        document.getElementById('result_time_in_format').innerText = "Введите положительное значение"
    } else {
        let hour = Math.floor(time_in_seconds / 3600);
        let minute = Math.floor((time_in_seconds - hour * 3600) / 60);
        let second = time_in_seconds - hour * 3600 - minute * 60;
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
    const full_time = document.getElementById('full_time').value;
    const regex1 = /\d\d[\:][0-5]\d[\:][0-5]\d/;
    if (regex1.test(full_time)) {
        let time_array = full_time.split(":");
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
    const data_one = document.getElementById('first_data').value;
    const data_two = document.getElementById('second _data').value;

    let Data_1 = new Date(data_one);
    let Data_2 = new Date(data_two);
    if (data_one <= data_two) {
        let year = Data_2.getFullYear() - Data_1.getFullYear();
        let month = Data_2.getMonth() - Data_1.getMonth();
        let day = Data_2.getDate() - Data_1.getDate();
        let hour = Data_2.getHours() - Data_1.getHours();
        let minutes = Data_2.getMinutes() - Data_1.getMinutes();
        if (minutes < 0) {
            minutes += 60;
            hour--;
        }
        if (hour < 0) {
            hour += 24;
        }
        if (day < 0) {
            day += 30;
            month--;
        }
        if (month < 0) {
            month += 12;
            year--;
        }
        document.getElementById('result_full _data').innerText =
            year + " year(s), " + month + " month(s), "
            + day + " day(s), " + hour + " hour(s), " + minutes + " minute(s), " + "0 second(s).";
    } else {
        document.getElementById('result_full _data').innerText = "не верно указан период";
    }
}

/**
 * The function that draws a chessboard depending on the given parameters
 */
function drawAchessboard() {
    const the_size = document.getElementById('chess_board').value;
    const regex = /\d[x]\d/i;
    if (!regex.test(the_size)) {
        document.getElementById('draw_a_chessboard').innerText = "Введен не коректный шаблон";
    } else {
        let array = the_size.split(/[x]/i);
        let width = +array[0];
        let height = +array[1];
        if (width <= 25 && height <= 25) {
            let elem = document.createElement("div");
            elem.style.height = height * 30 + 'px';
            elem.style.width = width * 30 + 'px';
            elem.style.background = 'white';
            elem.style.display = 'flex';
            elem.style.flexWrap = 'wrap';
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    let cell = document.createElement("div");
                    if (i % 2 === j % 2) {
                        cell.classList.add('cell_black');
                        elem.appendChild(cell);
                    } else {
                        cell.classList.add('cell_white');
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
    const textarea = document.getElementById('link_check').value;
    if (textarea === "") {
        document.getElementById('result_link_text').innerText = "Ничего не введено";
    } else {
        let array_list_unformatted = textarea.split(",");
        let regexURL = /(^(((http|https):\/\/)|(www\.)))[\w]+([\/\-\.]{1}[a-z0-9]+)/i;
        let regexIP = /^(1?\d?\d|25[0-5]|2[0-4]\d)\.(1?\d?\d|25[0-5]|2[0-4]\d)\.(1?\d?\d|25[0-5]|2[0-4]\d)\.(1?\d?\d|25[0-5]|2[0-4]\d)$/;
        let array_list = [];
        for (let i = 0; i < array_list_unformatted.length; i++) {
            array_list_unformatted[i] = array_list_unformatted[i].replace(/(^\s+|\s+$)/g, '');
            if (regexURL.test(array_list_unformatted[i])) {
                array_list.push(array_list_unformatted[i].replace(/^(((http|https):\/\/)|(www\.))/g, ''));
            } else if (regexIP.test(array_list_unformatted[i])) {
                array_list.push(array_list_unformatted[i]);
            }
        }
        array_list.sort();
        let arrayArea = document.createElement("div");
        arrayArea.style.display = 'flex';
        arrayArea.style.flexDirection = 'column';
        for (let i = 0; i < array_list.length; i++) {
            let text_url = document.createElement("a");
            text_url.text = array_list[i];
            text_url.target = '_blank';
            if (/^\d/.test(array_list[i])) {
                text_url.href = array_list[i];
            } else {
                array_list_unformatted.forEach(function (element) {
                    if (element.match(array_list[i])) {
                        text_url.href = element;
                    }
                })
                //text_url.href = 'https\:\/\/' + array_list[i];
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
    const textarea = document.getElementById('plain_text').value;
    const reg = document.getElementById('regular_expression').value;
    let regexp = new RegExp(reg, "g");
    document.getElementById('regular_expression_in_text').innerHTML =
        textarea.replace(regexp, '<mark>$&</mark>');
};









