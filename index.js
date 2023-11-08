const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 8080;
const SECRET_KEY = "6LfGYOAoAAAAABYELSGsdMNnONaVAzJU7zPYuqB5";
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.set("view engine", "ejs");
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "instagram",
  password: "Shahayush480",
});
app.get("/", (req, res) => {
  connection;
  res.render("user.ejs");
});
connection.end();
