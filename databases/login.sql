CREATE DATABASE login;

USE login;

CREATE TABLE user_login (
    user_id_fk int,
    email varchar(255),
    user_password varchar(255),
    FOREIGN KEY (user_id_fk) REFERENCES user_register(user_id)
    );