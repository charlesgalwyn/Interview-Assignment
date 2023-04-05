var express = require("express");
var router = express.Router();
var userController = require("../src/controllers/userController");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/addRecord", userController.addRecord);
router.get("/getRecords", userController.getRecords);

module.exports = router;