import express from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  getById,
} from "../controllers/todo.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router
  .route("/")
  .post(isAuthenticated, createTodo)
  .get(isAuthenticated, getAllTodos);

router
  .route("/:todoId")
  .put(isAuthenticated, updateTodo)
  .delete(isAuthenticated, deleteTodo)
  .get(isAuthenticated, getById);

export default router;
