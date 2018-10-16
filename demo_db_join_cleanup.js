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
    var sql1 = "DELETE FROM users";
    con.query(sql1, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    var sql2 = "DELETE FROM products";
    con.query(sql2, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});;