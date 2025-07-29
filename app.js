const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/books", (req, res) => {
  res.json({ messg: "Welcome to the Books API!" });
});
