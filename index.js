// Flow ->
// 1. require the express.
// 2. create the app.
// 3. define the port.
// 4. add a route by using callback function.
// 5. Open/Start/listen the server by a callback function
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("I am from home");
});
app.get("/about", (req, res) => {
  res.send("I am from About");
});

app.listen(port, () => {});
