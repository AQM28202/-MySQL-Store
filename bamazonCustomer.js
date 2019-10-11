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