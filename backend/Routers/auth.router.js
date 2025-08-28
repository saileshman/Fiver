const router = require("express").Router();
const { Register, Login } = require("../Controllers/auth.controller");


// testing purpose
router.post("/register",Register);
router.post("/login",Login);
//router.post("/logout",Logout)

module.exports = router;