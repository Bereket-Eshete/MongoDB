import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import database from "./db.js";
const app = express();
const { connectToDb, getDb } = database;
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
      console.log("Connected to MongoDB");
    });
    db = getDb();
  }
});
app.use("/books", bookRoutes);
