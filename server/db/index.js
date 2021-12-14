const mysql = require("mysql2");
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "blueocean2",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // port: 3306,
});

db.getConnection((err) => {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

module.exports = db;
