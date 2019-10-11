DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);



SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("CD Player", "Electronics", 30, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Dell Laptop", "Electronics", 1200, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Barbie Doll", "Toys & Games", 12, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Connect Four", "Toy & Games", 10, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Dress Shirt", "Men's Clothing", 50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Green Pants", "Men's Clothing", 75, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Throw Pillow", "Home Decor", 25, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Throw Blanket", "Home Decor", 50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Eye Liner", "Health & Beauty", 10, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lipstick", "Health & Beauty", 15, 5);

SELECT * FROM products;