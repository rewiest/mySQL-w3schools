var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "wrpnst1492",
    database : "mydb"
});

con.connect (function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql1 = "CREATE TABLE users (id INT, name VARCHAR(255), favorite_product INT)";
    con.query(sql1, function(err, result) {
        if (err) throw err;
        console.log("Table(s) created!");
    });
    var sql2 = "CREATE TABLE products (id INT, name VARCHAR(255))";
    con.query(sql2, function(err, result) {
        if (err) throw err;
        console.log("Table(s) created!");
    });
});;