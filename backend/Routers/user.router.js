const router = require("express").Router();
const VerifiedToken = require("../Middleware/jwt");
const { DeleteUser } = require("../Controllers/user.controller");



 router.delete("/delete/:id",VerifiedToken,DeleteUser);

module.exports = router;