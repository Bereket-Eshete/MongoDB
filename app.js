const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const { connectToDb, getDb } = require("./db");
const app = express();
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    db = getDb();
  }
});

app.use("/books", bookRoutes);
