const express = require("express");
const bodyParser = require("body-parser");

const UserService = require("./services/user-service");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", async (req, res) => {
  const users = await UserService.findAll();
  res.render("user", { users });
});

app.get("/user/:id", async (req, res) => {
  const user = await UserService.find(req.params.id);
  res.send(user);
});

app.post("/user", async (req, res) => {
  const user = await UserService.add(req.body);
  res.send(user);
});

app.delete("/user/:id", async (req, res) => {
  const x = await UserService.del(req.params.id);
  res.send(x);
});

app.listen(3000, () => {
  console.log("Server listening");
});
