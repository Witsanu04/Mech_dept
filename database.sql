CREATE DATABASE inventory_system;

USE inventory_system;

CREATE TABLE inventory (

    id INT AUTO_INCREMENT PRIMARY KEY,

    item_id VARCHAR(50),
    plant VARCHAR(100),
    location VARCHAR(100),
    shelf VARCHAR(100),
    brand VARCHAR(100),
    category VARCHAR(100),
    matcode VARCHAR(100),
    description TEXT,

    unit_rate DECIMAL(10,2),

    total INT,

    unit VARCHAR(50),

    amount DECIMAL(10,2),

    image_url TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE withdraw_logs (

    id INT AUTO_INCREMENT PRIMARY KEY,

    item_id VARCHAR(50),

    user_name VARCHAR(100),

    quantity INT,

    withdraw_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin_users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(100),

    password VARCHAR(255)
);

INSERT INTO admin_users(username,password)
VALUES('admin','1234');