const express = require("express");
const userControllers = require("./../controllers/userControllers");

//All Routes
const router = express.Router();

//users routes
router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);
router
  .route("/:id")
  .get(userControllers.getSingleUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);
  
module.exports = router;
