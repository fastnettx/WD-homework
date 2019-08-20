const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    },
    {
        category: 'clothes',
        name: 'Dress',
        amount: 4,
        price: 15
    }
];

fullDisplay("");

function elementDisplay(var_category, var_name) {
    var part_table = "<tbody>";
    var sum = 0;
    for (var i = 0; i < GOODS.length; i++) {
        part_table += "<tr>";
        if (GOODS[i].category === var_category) {
            if (GOODS[i].name.toLocaleLowerCase().indexOf(var_name.toLowerCase()) !== -1) {
                part_table += "<th>" + GOODS[i].category + "</th>";
                part_table += "<th>" + GOODS[i].name + "</th>";
                part_table += "<th>" + GOODS[i].amount + "</th>";
                part_table += "<th>" + GOODS[i].price + "</th>";
                sum += +GOODS[i].price;
            }
        }
        part_table += "</tr>";
    }
    part_table += "</tbody>";
    document.getElementById("body_table").innerHTML = part_table;
    document.getElementById("tr_result").innerHTML = sum + " $";
}

function fullDisplay(var_name) {
    var part_table = "<tbody>";
    var sum = 0;
    for (var i = 0; i < GOODS.length; i++) {
        part_table += "<tr>";
        if (var_name === "") {
            part_table += "<th>" + GOODS[i].category + "</th>";
            part_table += "<th>" + GOODS[i].name + "</th>";
            part_table += "<th>" + GOODS[i].amount + "</th>";
            part_table += "<th>" + GOODS[i].price + "</th>";
            sum += +GOODS[i].price;
            part_table += "</tr>";
        } else if (GOODS[i].name.toLocaleLowerCase().indexOf(var_name.toLowerCase()) !== -1) {
            part_table += "<th>" + GOODS[i].category + "</th>";
            part_table += "<th>" + GOODS[i].name + "</th>";
            part_table += "<th>" + GOODS[i].amount + "</th>";
            part_table += "<th>" + GOODS[i].price + "</th>";
            sum += +GOODS[i].price;
        }
        part_table += "</tr>";
    }
    part_table += "</tbody>";
    document.getElementById("body_table").innerHTML = part_table;
    document.getElementById("tr_result").innerHTML = sum + " $";
}

function tableFilter() {
    var val = document.getElementById('select_option').value;
    var name = document.getElementById('input_name').value;
    if (val !== "") {
        elementDisplay(val, name);
    } else {
        fullDisplay(name);
    }
}

var switch_name_categoory = true;
document.getElementById('th_category').style.cursor = 'pointer';
document.getElementById('th_category').onclick = function () {
    if (switch_name_categoory) {
        document.getElementById('th_category').innerHTML = "Category ▲";
        switch_name_categoory = false;
        GOODS.sort((a, b) => b.category > a.category ? 1 : -1);
        tableFilter();
    } else {
        document.getElementById('th_category').innerHTML = "Category ▼";
        GOODS.sort((a, b) => a.category > b.category ? 1 : -1);
        switch_name_categoory = true;
        tableFilter();
    }
};
var switch_name = true;
document.getElementById('th_name').style.cursor = 'pointer';
document.getElementById('th_name').onclick = function () {
    if (switch_name) {
        document.getElementById('th_name').innerHTML = "Name ▲";
        switch_name = false;
        GOODS.sort((a, b) => b.name > a.name ? 1 : -1);
        tableFilter();
    } else {
        document.getElementById('th_name').innerHTML = "Name ▼";
        GOODS.sort((a, b) => a.name > b.name ? 1 : -1);
        switch_name = true;
        tableFilter();
    }
};



