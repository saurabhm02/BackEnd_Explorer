const express = require("express");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const dbConnect = require("./db/dataBase");
const { cloudinaryConnect } = require("./db/cloudinary");
const Upload = require("./routes/fileUpload");

const app = express();

dbConnect();
cloudinaryConnect();
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const port = process.env.PORT || 5000;
 
app.use("/api/v1/upload", Upload);

app.get("/", (req, res) => {
    res.send("Hello World");
});
    
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});