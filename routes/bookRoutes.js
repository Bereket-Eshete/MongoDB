const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ messg: "Welcome to the Books API!" });
});

module.exports = router;
