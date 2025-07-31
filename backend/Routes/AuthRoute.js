
const { Signup, Login } = require("../Controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

// Authentication Routes
router.post("/signup", Signup);
router.post("/login", Login);
router.post('/verify',userVerification)

module.exports = router;