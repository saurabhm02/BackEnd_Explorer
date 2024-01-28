const mongoose = require('mongoose');
require('dotenv').config();

const db_Url = process.env.DATABASE_URL;

const dbConnect = () =>{
    mongoose.connect(db_Url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log('Database connected'))
    .catch((err)=> {
        console.log("error connecting to database");
        console.error(err);
        process.exit(1);
    }); 
};

module.exports = dbConnect;