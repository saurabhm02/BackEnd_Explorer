const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(dbUrl)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error("Error while connecting to database");
        console.error(err);
        process.exit(1);
    });
};

module.exports = dbConnect;
