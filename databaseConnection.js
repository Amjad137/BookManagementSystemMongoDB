const mongoose = require("mongoose");

function dbConnection () {
const DB_URL = process.env.MONGO_URI;
mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Errors"));

db.once("open", function(){
    console.log("DB COnnected")
})

module.exports = dbConnection;

//1.create an env file and set it up
// 2.create dtbs cnnctn file.js and set it up
// 3. create models and define datatypes of the columns
// 4.upload models to index.js
// 5.create controllers

