const express = require('express');
const router = express.Router();

const { login , signup } = require("../controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth")

const User = require("../models/user.Model")
router.post("/login", login);
router.post("/signup", signup);

router.get("/test", auth, (req, res)=>{
    res.json({
        success: true,
        message: "You are logged in Test route"
    })
}); 
// Protected routes
router.get("/student", auth, isStudent, (req, res)=>{
    res.json({
        success: true,
        message: "You are logged in as student in this Protected route"
    })
});

router.get("/admin", auth, isAdmin, (req, res)=>{
    res.json({
        success: true,
        message: "You are logged in as admin in this Protected route"
    })
});

router.get("/getEmail", auth, async(req, res) =>{
    try{
        const id = req.user.id;
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            user: user,
            message: "Welcome to the Email route",
        });
    } catch(error){
        console.log(error);
        return res.status(401).send({
            success: false,
            message:"Some error occurred while authenticating the Email"
        });
    }
})
module.exports = router;