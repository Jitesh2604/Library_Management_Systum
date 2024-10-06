const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth  = require("../middleware/auth.middleware");
const checkAccess = require("../middleware/checkAccess.middleware");
const User = require("../modles/user.model");

router.get("/", auth, checkAccess("Admin"), async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(err)
    }
});

router.get("/:id", auth, checkAccess("Admin"), async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(err)
    }
});

router.put("/:id", auth, checkAccess("Admin"), async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(err)
    }
});
