const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "p!bo2023",
database:"register" 
})

module.exports = db;