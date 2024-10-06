require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.URL;

const connectDB = async() => {
    try {
        await mongoose.connect(url);
        console.log(`MongoDB Connected Successfully`);
    } catch (err) {
        console.log(`MongoDB Connectinon Failed`);
    }
}

module.exports = connectDB;