const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const data = require("./data.json");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index.ejs");
  // extention is not required but file in views folder should have ejs extention
});
app.get("/instagram/user/:userid", (req, res) => {
  let { userid } = req.params;
  res.render("user.ejs", { data: data[userid] });
  // extention is not required but file in views folder should have ejs extention
});
app.set("views", path.join(__dirname, "/views"));
