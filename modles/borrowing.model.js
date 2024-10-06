const mongoose = require("mongoose");

const borrowingSchema = mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book',
        required: true
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    borrowedDate: {
        type: Date,
        default: Date.now()
    },
    dueDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ["Borrowed", "Returned"], 
        default: "Borrowed"
    }
});

module.exports = mongoose.model('borrowing', borrowingSchema); 