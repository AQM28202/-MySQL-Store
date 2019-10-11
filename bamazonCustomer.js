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
    for (let i = 0; i < res.length; i++) {
        console.log("product id: " + res[i].item_id);
        console.log("product name: " + res[i].product_name);
        console.log("department: " + res[i].department_name);
        console.log("price: " + res[i].price);
        console.log("In stock: " + res[i].stock_quantity);
        console.log("---------------");
    }
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