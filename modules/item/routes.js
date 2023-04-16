const express = require("express");
const router = express.Router();

const { isAuthenticated } = require("../../utils/permissions");
const controllers = require("./controllers");

router.get("/", isAuthenticated, controllers.listItem);

router.get("/:id", isAuthenticated, controllers.getItem);

router.post("/", isAuthenticated, controllers.createItem);

router.delete("/:id", isAuthenticated, controllers.deleteItem);

router.patch("/:id", isAuthenticated, controllers.updateItem);

module.exports = router;
