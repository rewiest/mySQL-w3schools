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
    var sql = "SELECT * FROM customers ORDER BY name DESC";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});;