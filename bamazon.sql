DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
item_id INTEGER(11) NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Pots", "Housewares", 5.50, 100), (2, "Pans", "Housewares", 6.75, 103), (3, "Lotion", "Health and Beauty", 12.49, 73);


