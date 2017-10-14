const router = require("express").Router();
const todoRoutes = require("./todos.js");

// Book routes
router.use("/toDos", todoRoutes);

module.exports = router;
