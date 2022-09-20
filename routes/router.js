var express = require("express");
var router = express.Router();
var {
  create,
  read,
  update,
  deleteUser,
} = require("../server/controller/controler");
var { home, addUser, updateUser } = require("../api");

// Users
router.get("/", home);

// Add New User
router.get("/add", addUser);

// Update User
router.get("/update", updateUser);

// REQUEST
router.post("/api/create", create);
router.get("/api/users", read);
router.put("/api/users/:id", update);
router.delete("/api/users/:id", deleteUser);

module.exports = router;
