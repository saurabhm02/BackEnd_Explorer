const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/Database");
const blog = require("./routes/BlogRoutes");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
dbConnect();

app.use("/api/v1/", blog);

app.get("/", (req, res) => {
    res.send('<div style="background-color: orange; padding: 20px; display: flex; align-items: center; justify-content: center; height: 100%"> <h1 style="background-color: black; color: white;">This is my Blog page</h1> </div>');
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})