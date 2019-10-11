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



select * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("CD Player", "Electronics", 30, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Laptop", "Electronics", 1200, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Barbie Doll", "Toy", 12, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Connect Four", "Toy", 10, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shirt", "Apparel", 50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pants", "Apparel", 75, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pillow", "Home Decor", 25, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Throw Blanket", "Home Decor", 50, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Eye Liner", "Beauty", 10, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lipstick", "Beauty", 15, 5);

SELECT * FROM products;