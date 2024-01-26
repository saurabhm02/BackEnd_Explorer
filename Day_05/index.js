const express = require("express");
const todoRoutes = require("./routes/todos");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

const dbConnect = require("./config/database");
dbConnect(); 

app.use("/api/v1", todoRoutes); // it mount the todo API route


app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`<h1>This is my HomePage</h1>`);
});
