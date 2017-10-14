//use api to search for homes
const router = require("express").Router();
const toDoControl = require("../../controllers/toDoControl");

// Matches with "/api/books"
router.route("/")
  .get(toDoControl.findAll)
  .post(toDoControl.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(toDoControl.findById)
  .put(toDoControl.update)
  .delete(toDoControl.remove);

module.exports = router;
