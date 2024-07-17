const express = require("express");
const fs = require("fs");

const server = express();

server.use(express.json())

server.get("/todos", (req, res) => {
    const dbdata = -
  res.send("welcome to homePage");
});

server.post("/addTodo", (req, res) => {
  let incomingData = req.body;
  console.log(incomingData)

  const dbdata = fs.readFileSync("./db.json", "utf-8");

  console.log(dbdata);

  const ParseData = JSON.parse(dbdata);

  ParseData.todos.push(incomingData);

  fs.writeFileSync("./db.json" , JSON.stringify(ParseData));

  res.send("Data Recieved");
});


server.listen(8585, () => {
  console.log("Server Started");
});
