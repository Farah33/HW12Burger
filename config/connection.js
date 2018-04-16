var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
});
connection.connect(function(err) {
    if (err) {
        console.log("error connect " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});
module.exports = connection;