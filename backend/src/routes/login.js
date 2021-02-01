const { Router } = require("express");
const router = Router();
const { doLogin } = require("../controllers/login.controller");

router.route("/").post(doLogin);

module.exports = router;
