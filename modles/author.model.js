const mongoose = require("mongoose");
// const userModel = require("./user.model");

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    biography: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    nationality: {
        type: String
    },
    books: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }
});

module.exports = mongoose.model('author', authorSchema);