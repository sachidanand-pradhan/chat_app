const express = require("express");
const chats = require("./Data/data");

const app = express();
// let PORT = 5000;
app.get("/", (req, res) => {
  res.send("API is running and get request route is also");
});

app.get("/api/chat", (req, res) => {
  console.log("API chat endpoint hit");
  console.log(chats);
  res.send(chats);
});

app.listen(5000, console.log(`Server is running on PORT 5000`));
