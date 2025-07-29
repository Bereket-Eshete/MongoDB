import { ObjectId } from "mongodb";
import database from "../db.js";

export const getAllBooks = async (req, res) => {
  try {
    const { getDb } = database;
    const db = getDb();
    let books = [];
    await db
      .collection("books")
      .find()
      .sort({ author: 1 })
      .forEach((element) => books.push(element));
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
export const getOneBook = async (req, res) => {
  try {
    const { getDb } = database;
    const db = getDb();
    if (ObjectId.isValid(req.params.id)) {
      const doc = await db
        .collection("books")
        .findOne({ _id: new ObjectId(req.params.id) });
      res.json({ success: true, data: doc });
    } else {
      res.status(400).json({ success: false, message: "Invalid book ID" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export const createBook = async (req, res) => {
  const { getDb } = database;
  const db = getDb();
  const { title, author, pages, rating, geners, reviews } = req.body;
  try {
    if (!title || !author || !pages)
      throw new error("please fill all the required fileds");
    const newBook = await db
      .collection("books")
      .insertOne({ title, author, pages, rating, geners, reviews });
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const deleteBook = async (req, res) => {
  const { getDb } = database;
  try {
    const db = getDb();
    await db
      .collection("books")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res
      .status(200)
      .json({ success: true, message: "book deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
