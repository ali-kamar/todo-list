const express = require("express");

const router = express.Router();
const { createTodo, getAllTodo, getTodo, updateTodo } = require("../controllers/todos");

router.route("/").post(createTodo).get(getAllTodo);

router.route("/:id").get(getTodo).delete(deleteProduct).patch(updateTodo);

module.exports = router;
