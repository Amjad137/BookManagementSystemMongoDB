const express = require("express");

const router = express.Router();

const {getAllUsers,getuserByID}= require("../controllers/user-controller");

/**
 * Route: /users
 * Method: GET
 * Description: Getting all Users
 * Access: Public
 * Parameters: None
 */

router.get("/", getAllUsers);

/**
 * Route: /users
 * Method: GET
 * Description: Getting all Users
 * Access: Public
 * Parameters: None
 */

router.get("/:id", getuserByID);


module.exports = router;