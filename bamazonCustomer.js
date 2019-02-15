var conn = require("./connection.js");
var connection = conn.connection;
conn.connectDB();
connection.query("SELECT * FROM products", function(err, results, fields) {
  if (err) throw err;
  console.log(results);
});
