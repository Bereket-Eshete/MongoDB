import express from "express";
const router = express.Router();
import { getAllBooks } from "../controllers/bookController.js";
router.get("/", getAllBooks);

export default router;
