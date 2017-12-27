//npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");
//database connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "All4myFam",
	database: "bamazonDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId)

	showProducts();
});

function showProducts() {
	console.log("Selecting all products...\n");
	  connection.query("SELECT * FROM products", function(err, res) {
	    if (err) throw err;
	    console.log(res);
	    	start();
	 });
}

function start() {
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw err;
	inquirer
		.prompt([
			{
				name: "purchase",
				type: "rawlist",
				choices: function() {
					var purchaseArray = [];
					for (var i = 0; i <results.length; i++) {
						purchaseArray.push(results[i].product_name);
					}
					return purchaseArray;
				},
				message: "What would you like to purchase?"
			}
		])
	});
}

