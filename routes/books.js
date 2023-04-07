const express = require("express");

const {getAllBooks,getSingleBookbyID,getIssuedBooks,addNewBook,updateBookByID} = require("../controllers/book-controller");
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

/**
 * Route: /books/issued
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: None
 */

router.get("/issued/allbooks",getIssuedBooks);

/**
 * Route: /books
 * Method: POST
 * Description: Add New Book
 * Access: Public
 * Parameters: None
 */

router.post("/",addNewBook);


/**
 * Route: /books/:id
 * Method: PUT
 * Description: Update a Book By ID
 * Access: Public
 * Parameters: id
 */

router.put("/:id", updateBookByID);

module.exports = router;