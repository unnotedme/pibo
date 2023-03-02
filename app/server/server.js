const express = require("express")
const mysql = require("mysql2")
const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", //removed for now
    database: "pibo"
})

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });


 app.get("/user_register", (req,res)=>{
    db.query("SELECT * FROM USER_REGISTER", (err, result) => {
        if (err){
            console.log("Error selecting.")
        }
        res.send(result);
    })
})

db.end;


app.listen(5000, () => {console.log("Server started on port 5000.")})