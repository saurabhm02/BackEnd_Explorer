const express = require('express');
require('dotenv').config();
const dbConnect = require("./db/Database"); // Ensure the path is correct
const blog = require("./routes/Blog");

const PORT =  process.env.PORT || 5000;
const app = express();
app.use(express.json());
dbConnect();


app.use("/api/v1", blog);

app.get("/", (req, res) => {
    res.send('<div style="background-color: orange; padding: 20px; display: flex; align-items: center; justify-content: center; height: 100%"> <h1 style="background-color: black; color: white;">This is my Blog Home page</h1> </div>');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
