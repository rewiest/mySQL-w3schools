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
    var sql1 = "INSERT INTO users (id, name, favorite_product) VALUES ?";
    var values1 = [
        [1, 'John', 154],
        [2, 'Peter', 154],
        [3, 'Amy', 155],
        [4, 'Hannah', 0],
        [5, 'Michael', 0]
    ];
    con.query(sql1, [values1], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    var sql2 = "INSERT INTO products (id, name) VALUES ?";
    var values2 = [
        [154, 'Chocolate Heaven'],
        [155, 'Tasty Lemons'],
        [156, 'Vanilla Dreams']
    ];
    con.query(sql2, [values2], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});;