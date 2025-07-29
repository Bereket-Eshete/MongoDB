import express from "express";
const router = express.Router();
import {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
} from "../controllers/bookController.js";
router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.post("/", createBook);
router.delete("/:id", deleteBook);
export default router;
