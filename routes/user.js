const express = require("express");

const router = express.Router();

const {getAllUsers,getUserByID, createNewUser, updateUserByID, deleteUserByID}= require("../controllers/user-controller");

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
 * Description: Getting user by ID
 * Access: Public
 * Parameters: ID
 */

router.get("/:id", getUserByID);

/**
 * Route: /users
 * Method: POST
 * Description: Create a new User
 * Access: Public
 * Parameters: None
 */

router.post("/", createNewUser);

/**
 * Route: /users
 * Method: PUT
 * Description: Update user by ID
 * Access: Public
 * Parameters: ID
 */

router.put("/:id", updateUserByID);

/**
 * Route: /users
 * Method: PUT
 * Description: Update user by ID
 * Access: Public
 * Parameters: ID
 */

router.delete("/:id", deleteUserByID);


module.exports = router;