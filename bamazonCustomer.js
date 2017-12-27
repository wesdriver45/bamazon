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
});

function purchaseProduct() {
	
}