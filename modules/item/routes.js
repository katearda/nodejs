const express = require("express");
const router = express.Router();

const controllers = require("./controllers");

router.get("/", controllers.listItem);

router.get("/:id", controllers.getItem);

router.post("/", controllers.createItem);

router.delete("/:id", controllers.deleteItem);

router.patch("/:id", controllers.updateItem);

module.exports = router;
