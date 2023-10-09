const express = require("express");
const app = express();
const port = 8080;

// app.use((req, res) => {
//   console.log("req rec");
//   // if user hits endpoint then will console it
//   res.send({ key: "Value", key2: "val2" });
//   // sending data to endpoint
//   // over endpoint we can send text,html array or object
// });
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// get request
app.get("/ayush", (req, res) => {
  res.send({ name: "Ayush", age: 20 });
});
// post req
app.post("/neha", (req, res) => {
  res.send({ name: "Neha", age: 21 });
});
// request with params
app.get("/user/:id", (req, res) => {
  let name = req.params.id;
  console.log(req.params);
  res.send(`Hello ${name}`);
});
// request with query
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (q) {
    res.send(`Search result for ${q}`);
  } else {
    res.send("Nothing found if nothing searched");
  }
});
// for any path rather then above ones
app.get("*", (req, res) => {
  res.send("Something went wrong");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
