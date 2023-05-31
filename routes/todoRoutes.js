const express = require("express");
const {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = express.Router();

// Create and Read routes
router.route("/").post(setTodo).get(getTodos);

// Update and Delete routes
router.route("/:id").put(updateTodo).delete(deleteTodo);

module.exports = router;
