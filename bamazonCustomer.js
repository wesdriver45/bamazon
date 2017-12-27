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
//show products at connection to store
function showProducts() {
	console.log("Selecting all products...\n");
	  connection.query("SELECT * FROM products", function(err, res) {
	    if (err) throw err;
	    console.log(res);
	    	start();
	 });
}
//start the prompts
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
			},
			{
				name: "quantity",
				type: "input",
				message: "How many would you like?",
				validate: function(value) {
					if (isNaN(vlaue) === false) {
						return true;
					}
					return false;
				}
			}
		])
			.then(function(answer) {
				var chosenItem;
				for (var i = 0; i < results.length; i++) {
					if(results[i].product_name === answer.product) {
						chosenItem = results[i];
						console.log(chosenItem);
					}
				}
				//update the quantity

			})
	});
}

