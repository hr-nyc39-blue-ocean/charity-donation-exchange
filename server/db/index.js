const mysql = require("mysql2");
const db = mysql.createPool({
  host: "18.190.153.141",
  user: "user",
  password: "password",
  database: "blueocean2",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err) => {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

module.exports = db;
