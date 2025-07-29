const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use("/books", bookRoutes);
