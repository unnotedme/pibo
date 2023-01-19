CREATE DATABASE login;

USE login;

CREATE TABLE user_register (
    user_id int identity(1,1) PRIMARY KEY,
    email varchar(255),
    user_password varchar(255),
    guardian_name varchar(255),
    )


CREATE TABLE pet_register (
    user_id_FK int,
    pet_id int identity(1,1) PRIMARY KEY,
    pet_name varchar(255),
    birthday varchar(255),
    specie varchar(255),
    breed varchar(255),
    sex varchar(255),
    FOREIGN KEY (user_id_FK) REFERENCES user_register(user_id)
    );


CREATE TABLE user_login (
    user_id_fk int,
    email varchar(255),
    user_password varchar(255),
    FOREIGN KEY (user_id_fk) REFERENCES user_register(user_id)
    );