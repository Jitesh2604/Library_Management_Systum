const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Admin", "Member"], 
        default: "Member",
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    borrowedBooks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }
});

module.exports = mongoose.model('user', userSchema);