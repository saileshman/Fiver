const router = require("express").Router();
const { Order } = require("../Controllers/order.controller");

// test purpose
router.get("/order",Order)

module.exports = router;