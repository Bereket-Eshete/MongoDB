import express from "express";
const router = express.Router();
import { getAllBooks, getOneBook } from "../controllers/bookController.js";
router.get("/", getAllBooks);
router.get("/:id", getOneBook);

export default router;
