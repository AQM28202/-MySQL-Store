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

    inquirer.prompt([{
		name: "product",
		type: "input",
		message: "What is the ID of the product that works best for you?"
	},
	{
		name: "qty",
		type: "input",
		message: "You will claim your write-off later, so how many of this product did you have in mind?"




	}]).then(function (productObj) {
		if (productObj.product.toUpperCase() == "Y") {
			connection.end();
		} else {
			connection.query('SELECT * FROM products WHERE ?', { item_id: productObj.product }, function (err, res) {
				if (err) throw err;
				// console.log(res)
				if (res[0].stock_quantity >= productObj.qty) {

					var cost = res[0].price * productObj.qty
					console.log("-----------------------------------");
					console.log("Your order is validated! \nThe total cost is $" + cost.toFixed(2) + "\nThank you for ordering")

					var newQty = res[0].stock_quantity - productObj.qty

					connection.query("UPDATE products SET ? WHERE ?", [{
						stock_quantity: newQty
					},
					{
						product_name: productObj.product
					}],

						function (err, res) {
						});
				}
				else {
					console.log("-----------------------------------");
					console.log("Sorry, we do not have enough in stock. \nWe only have " + res[0].stock_quantity + " units of " + productObj.product + ". \nPlease retry your order. \nThank you!")
				}
			})
		}
	})
});



