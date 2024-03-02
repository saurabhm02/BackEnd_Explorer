const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_Secret = process.env.JWT_SECRET;

exports.auth = (req, res, next) =>{
    try{
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer", "").trim();;

        if(!token){
            return res.status(401).json({
                success: false,
                message: "token is missing"
            });
        }
        try{
            const decoded = jwt.verify(token, jwt_Secret);
            console.log(decoded);
            req.user = decoded;
        } catch(err){
            console.log(err);
            return res.status(401).send({
                success: false,
                message:"Token is invalid"
            });
        }
        next();
    } catch(err){
        console.log(err);
        return res.status(401).send({
            success: false,
            message:"Some error occurred while authenticating."
        });
    }
};

exports.isStudent = (req, res, next) =>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success: false,
                message: "You are not authorized as student  to access this route"
            });
        }

        next();
    } catch(error){
        console.log(error);
        return res.status(401).send({
            success: false,
            message:"Some error occurred while authenticating the student"
        });
    }
};

exports.isAdmin = (req, res, next) =>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "You are not authorized as Admin  to access this route"
            });
        }

        next();
    } catch(error){
        console.log(error);
        return res.status(401).send({
            success: false,
            message:"Some error occurred while authenticating the Admin"
        });
    }
};