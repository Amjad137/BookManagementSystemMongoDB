const express = require("express");
const dotenv= require("dotenv");

const dbConnection = require("./databaseConnection.js");

const userRouter = require("./routes/user.js");
const bookRouter = require("./routes/books");

dotenv.config();

const app = express();

dbConnection(); // should be called before port

const port=8081;

app.use(express.json());





app.get("/", (req,res) => {
    res.status(200).send({
        Message: "hello"
    });
});

app.use("/users", userRouter);
app.use("/books",bookRouter);

//to manage invalid routes (this should be kept on very low area)
app.get("*", (req,res) => {
    res.status(404).send({
        Message : "This route Doesn't Exist"
    });
});

app.listen(port, () => {
    console.log(`The Server is Running on ${port}`);
});

//http/localhost:8081