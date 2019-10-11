// Node modules required

var mysql = require('mysql');
var inquirer = require('inquirer');

// mySQL connection

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "bamazon_db"
});


connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("Item    Product \t\tDepartment \tPrice\t Stock");
    console.log("------------------------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " \t" + res[i].product_name + "\t\t" + res[i].department_name + "\t" + res[i].price + " \t " + res[i].stock_quantity);
    }
    console.log("------------------------------------------------------------------");
});