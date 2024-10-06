require("dotenv").config();
 const express = require("express");
 const router = express.Router();
 const jwt = require("jsonwebtoken");
 const bcrypt = require("bcrypt");
 const User = require("../modles/user.model");


 router.post("/regisetr", async(req, res) => {
    try {
        const { username, password, email, role } = req.body;
        const newUser = await User.finOne({email});

        if(newUser) {
            return res.status(400).json({message: "User already exist"});
        }

        const hashPasswod = await bcrypt.hash(password, 10);
        newUser = new User({username, password: hashPasswod, email, role });
        await newUser.save()
        res.status(201).json({message: "User Register Successfully"});
    } catch (err) {
        res.status(400).json({error: err.message})
        }
 });

 router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({error: "User not found"});
        };
        
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(400).json({error: "Wrong Password! Please try again"});
        };

        const token = jwt.sign({_id: user._id, role: user.role}, process.env.SECRET_KEY, {expiresIn: '1d'});
        res.json({token, message:"Logged In Successfully", userRole: user.role});
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
    
 });

 module.exports = router