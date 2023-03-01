//import express from "express"
//import mysql from "mysql"

const express = require("express")
const mysql = require("mysql2")
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo"] })
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", //removed 
    database: "pibo"
})

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  

 app.get("/user_login", (req,res)=>{
     const sel = "SELECT * FROM USER_LOGIN"
     db.query(sel,(err,data)=>{
if (err) return res.json(err)
    })
 })


app.listen(5000, () => {console.log("Server started on port 5000.")})