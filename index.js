require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");

const userRoute = require("./controllers/user.controller");
const authorRoute = require("./controllers/author.controller");
const bookRoute = require("./controllers/books.controller");
const borrowingRoute = require("./controllers/borrowing.controller");
const authRoute = require("./controllers/auth.controller");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("connected");
});

app.use("api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/author", authorRoute);
app.use("/api/books", bookRoute);
app.use("/api/borrowing", borrowingRoute);

const PORT = process.env.PORT;
app.listen(PORT, async() => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);    
    } catch (error) {
        console.log(`Server connection Failed`);
    }
})