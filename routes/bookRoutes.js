const { getDb } = require("../db");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    let db = getDb();
    let books = [];
    await db
      .collection("books")
      .find()
      .sort({ author: 1 })
      .forEach((element) => books.push(element));
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
