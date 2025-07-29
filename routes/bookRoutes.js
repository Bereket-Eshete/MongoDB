import express from "express";
const router = express.Router();
import {
  getAllBooks,
  getOneBook,
  createBook,
  deleteBook,
  updateBook,
} from "../controllers/bookController.js";
router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.post("/", createBook);
router.delete("/:id", deleteBook);
router.patch("/:id", updateBook);
export default router;
