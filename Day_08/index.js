const express = require('express');
require('dotenv').config();
const dbConnect = require('./db/database');
const user = require('./routes/user');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

dbConnect();

app.use("/api/v1", user);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});  