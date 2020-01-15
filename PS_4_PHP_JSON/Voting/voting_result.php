<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['toVote'])) {
    startVoting();
}

function startVoting()
{
    if (!isset($_POST['radio'])) {
        $_SESSION['theThoice'] = "Зробіть Ваш вибір!";
        header("Location: index.php");
    } else unset($_SESSION['theThoice']);
    writeToTheDatabase($_POST['radio']);
}

function writeToTheDatabase($value)
{
    $file = 'result.json';
    $open_file = file_get_contents($file);
    $arr = json_decode($open_file, TRUE);
    if (empty($arr)) {
        $arr = array('Так' => 0, 'Більше Так, чим Ні' => 0, 'Більше Ні, чим Так' => 0,
            'Ні' => 0, 'Ще не визначився' => 0);
    }
    if (!empty($value) && array_key_exists($value, $arr)) {
        $arr[$value]++;
    }
    file_put_contents($file, json_encode($arr));
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>voting</title>
    <link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>
<div class="chart_wrap">
    <div id="donutchart" style="height: 400px;"></div>
</div>
<div class="back">
    <input type="button" onclick="history.back();" value="Повернутися">
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    $.getJSON('result.json', function (data) {
        let items = [['number', 'value']];
        for (let key in data) {
            let element = [key, data[key]];
            items.push(element);
        }
        google.charts.load("current", {packages: ["corechart"]});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(items);
            var options = {
                title: 'Результат голосування',
                pieHole: 0.2,
                slices: {
                    0: {offset: 0.05},
                    1: {offset: 0.05},
                    2: {offset: 0.05},
                    3: {offset: 0.05},
                    4: {offset: 0.05},
                },
            };
            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        }
    })
</script>
</body>
</html>

