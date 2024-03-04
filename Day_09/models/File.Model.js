const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

require("dotenv").config();

const fileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
        required: true
    }
});

fileSchema.post("save", async(doc) =>{
    try{
        console.log("doc: ", doc);

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });


        let info = await transporter.sendMail({
            from: "Saurabh",
            to: doc.email,
            subject: "New File Uploaded in Database",
            html: `
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                            background-color: #f5f5f5;
                        }
                        .container {
                            background-color: #fff;
                            border-radius: 8px;
                            padding: 20px;
                        }
                        h1 {
                            color: #333;
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                            border-radius: 4px;
                            cursor: pointer; /* Change cursor to pointer when hovering over the image */
                        }
                        p {
                            color: #666;
                            margin-bottom: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Hello ${doc.name},</h1>
                        <p>A new file has been uploaded to the database:</p>
                        <a href="${doc.imageUrl}" target="_blank"> <!-- Open image in a new tab when clicked -->
                            <img src="${doc.imageUrl}" alt="Uploaded File">
                        </a>
                        <p><strong>Tags:</strong> ${doc.tags}</p>
                        <p><strong>Email:</strong> ${doc.email}</p>
                    </div>
                </body>
                </html>
            `
        });
        

        console.log("info: " ,info);
        
    }
    catch(e){
        console.error(e);
    }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;