const express = require("express");
const router = express.Router();

const controllers = require("./controllers");

router.post("/register", controllers.registerUser);

router.post("/login", controllers.loginUser);

module.exports = router;
