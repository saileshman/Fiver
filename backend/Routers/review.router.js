const router = require("express").Router();
const { Review } = require("../Controllers/review.controller");

// test purpose
router.get("/review",Review)

module.exports = router;