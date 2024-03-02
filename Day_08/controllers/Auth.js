const bcrypt = require("bcrypt");
const User = require("../models/user.Model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_Secret = process.env.JWT_SECRET;

exports.signup = async (req, res) =>{
    try{
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists with given email"
            });
        }
        let hashedPasasword;
        try{
            hashedPasasword = await bcrypt.hash(password, 10);
        }
        catch(err){
            return res.status(500).json({
                success: false,
                message: "Error while hashing password"
            });
        }

        const user = await User.create({
            name,
            email,
            password: hashedPasasword,
            role
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            user,
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"Some error occurred while creating the user."
        });
    }
}

exports.login = async (req, res)=>{
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please provide email or password"
            });
        }
        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User does not exist with given email"   
            });
        }
        
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        }
        if( await bcrypt.compare(password, user.password)){
            let token = jwt.sign(payload, jwt_Secret, {
                expiresIn: "2d",
            });
            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                message: "User logged in successfully",
                token,
                user,
            });

            // res.status(200).json({
            //     success: true,
            //     message: "User logged in successfully",
            //     token,
            //     user,
            // });
        }
        else{
            return res.status(403).json({
                success: false,
                message: "password is incorrect"
            });
        }

    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            success: false,
            message:"Some error occurred while loging the user."
        });
    }
};