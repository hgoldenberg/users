const { Router } = require("express");
const router = Router();
const {
  createLogin,
  getLogins,
  getLogin,
} = require("../controllers/login.controller");

router.route("/login").post(createLogin);
router.route("/").get(getLogins);
router.route("/:id").get(getLogin);

module.exports = router;
