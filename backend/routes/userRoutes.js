const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
// router.route("/").get(allUsers);

router.route("/").get(protect, allUsers);

module.exports = router;
