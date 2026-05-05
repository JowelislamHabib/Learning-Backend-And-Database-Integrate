// Flow ->
// 1. require the express.
// 2. create the app.
// 3. define the port.
// 4. add a route by using callback function.
// 5. Open/Start/listen the server by a callback function
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("I am from home");
});
app.get("/about", (req, res) => {
  res.send("I am from About");
});

//Middlware
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Don Doe",
    email: "don@example.com",
  },
  {
    id: 3,
    name: "Mon Doe",
    email: "mon@example.com",
  },
  {
    id: 4,
    name: "Kon Doe",
    email: "kon@example.com",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("data in req", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({ success: true, message: "post method is working" });
});

app.listen(port, () => {
  console.log(`Listening ${port}`);
});
