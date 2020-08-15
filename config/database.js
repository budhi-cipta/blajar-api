
const mysql = require('mysql');



// membuat coneksi database
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rootroot",
    database:"netpliks"
})

module.exports = connection;