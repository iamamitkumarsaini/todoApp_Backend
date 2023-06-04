const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { todoRoutes } = require("./Routes/Todo.route");
const { connection } = require("./config/db");
const { postImageRoutes } = require("./Routes/Image.routes");


const app = express();

app.use(cors({
  origin:"*"
}));

app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to TodoApp-with-WebSocket" });
});

app.use("/", todoRoutes);
app.use("/images", postImageRoutes)

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connection to DB successful");
  } 
  
  catch (err) {
    console.log("Connection to DB failed");
    console.log(err);
  }
});


