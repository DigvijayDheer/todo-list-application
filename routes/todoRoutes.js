const express = require("express");
const router = express.Router();
const {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const { protect } = require("../middlewares/authMiddleware");

// Create and Read routes
router.route("/").post(protect, setTodo).get(protect, getTodos);

// Update and Delete routes
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);

module.exports = router;
