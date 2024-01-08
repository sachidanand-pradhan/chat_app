const express = require("express");
const chats = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // to accept json data from frontend

// let PORT = 5000;
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);

// app.get("/api/chat", (req, res) => {
//   console.log("API chat endpoint hit");
//   // console.log(chats);
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   let singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`.yellow.bold));
