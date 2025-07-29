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
