const express = require("express");

const {getAllBooks,getSingleBookbyID} = require("../controllers/book-controller");
const { route } = require("./user");

const router = express.Router();



/**
 * Route: /books
 * Method: GET
 * Description: Getting all books
 * Access: Public
 * Parameters: None
 */

router.get("/",getAllBooks);

/**
 * Route: /books/:id
 * Method: GET
 * Description: Get books by their id
 * Access: Public
 * Parameters: Id
 */

router.get("/:id",getSingleBookbyID);



module.exports = router;