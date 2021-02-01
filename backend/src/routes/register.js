const { Router } = require("express");
const router = Router();
const { createUser } = require("../controllers/register.controller");

router.route("/").post(createUser);

module.exports = router;
