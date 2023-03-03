const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const color = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
	res.send("API is running..");
});

app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;
app.listen(
	`${PORT}`,
	console.log(`Server Started on PORT ${PORT}`.yellow.bold)
);
