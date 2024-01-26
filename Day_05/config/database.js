const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL;
const dbConnect = () => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("database connected"))
    .catch((err) => {
        console.error("error connecting to database");
        console.error(err);  // Print the full error object for debugging
        process.exit(1);
    });
}

module.exports = dbConnect;
